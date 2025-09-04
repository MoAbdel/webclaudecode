const fs = require('fs');
const path = require('path');

// Function to find all TSX and JSX files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to audit images in a file
function auditImagesInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const results = [];
    
    // Find img tags
    const imgRegex = /<img[^>]*>/g;
    const imgMatches = content.match(imgRegex) || [];
    
    imgMatches.forEach((imgTag, index) => {
      const hasAlt = imgTag.includes('alt=');
      const srcMatch = imgTag.match(/src=["']([^"']+)["']/);
      const altMatch = imgTag.match(/alt=["']([^"']*)["']/);
      
      results.push({
        type: 'img',
        tag: imgTag,
        src: srcMatch ? srcMatch[1] : 'no src',
        alt: altMatch ? altMatch[1] : null,
        hasAlt: hasAlt,
        issue: !hasAlt ? 'Missing alt attribute' : null
      });
    });
    
    // Find Next.js Image components
    const imageRegex = /<Image[^>]*(?:\s*\/?>|\s*>[\s\S]*?<\/Image>)/g;
    const imageMatches = content.match(imageRegex) || [];
    
    imageMatches.forEach((imageTag, index) => {
      const hasAlt = imageTag.includes('alt=');
      const srcMatch = imageTag.match(/src=["']([^"']+)["']/);
      const altMatch = imageTag.match(/alt=["']([^"']*)["']/);
      
      results.push({
        type: 'Image',
        tag: imageTag.substring(0, 200) + (imageTag.length > 200 ? '...' : ''),
        src: srcMatch ? srcMatch[1] : 'no src',
        alt: altMatch ? altMatch[1] : null,
        hasAlt: hasAlt,
        issue: !hasAlt ? 'Missing alt attribute' : null
      });
    });
    
    return results;
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error.message}`);
    return [];
  }
}

// Main audit function
function auditImages() {
  console.log('🔍 Auditing all image components for alt attributes...\n');
  
  const files = findFiles('./app').concat(findFiles('./components'));
  let totalImages = 0;
  let totalIssues = 0;
  const issues = [];
  
  files.forEach(filePath => {
    const imageResults = auditImagesInFile(filePath);
    
    if (imageResults.length > 0) {
      console.log(`📄 ${filePath}:`);
      
      imageResults.forEach(result => {
        totalImages++;
        console.log(`  ${result.type === 'img' ? '🖼️' : '🎨'} ${result.type}: ${result.src}`);
        
        if (result.hasAlt) {
          if (result.alt === '') {
            console.log(`    ✅ Alt attribute: "" (empty for decorative image)`);
          } else {
            console.log(`    ✅ Alt attribute: "${result.alt}"`);
          }
        } else {
          console.log(`    ❌ Missing alt attribute!`);
          totalIssues++;
          issues.push({
            file: filePath,
            src: result.src,
            type: result.type,
            issue: result.issue
          });
        }
      });
      console.log('');
    }
  });
  
  // Summary
  console.log('📊 Summary:');
  console.log(`  Total images found: ${totalImages}`);
  console.log(`  Images with alt attributes: ${totalImages - totalIssues}`);
  console.log(`  Images missing alt attributes: ${totalIssues}`);
  
  if (totalIssues > 0) {
    console.log('\n❌ Issues found:');
    issues.forEach(issue => {
      console.log(`  - ${issue.file}: ${issue.type} with src="${issue.src}" missing alt attribute`);
    });
  } else {
    console.log('\n✅ All images have proper alt attributes!');
  }
  
  return { totalImages, totalIssues, issues };
}

// Run the audit
auditImages();