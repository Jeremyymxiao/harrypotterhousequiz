const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const imagesDir = path.join(__dirname, '../public/images');
const images = [
    'sort-hat.jpg',
    'hogwarts-bg.jpg'
];

async function compressImage(filename) {
    const inputPath = path.join(imagesDir, filename);
    const outputPath = path.join(imagesDir, `compressed-${filename}`);

    try {
        await sharp(inputPath)
            .webp({ quality: 82 })  // 使用webp格式，质量设为82
            .toFile(outputPath);

        // 获取原始文件大小
        const originalStats = await fs.stat(inputPath);
        const compressedStats = await fs.stat(outputPath);
        
        // 计算压缩比例
        const compressionRatio = ((originalStats.size - compressedStats.size) / originalStats.size * 100).toFixed(2);
        
        console.log(`✅ ${filename}:`);
        console.log(`   原始大小: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`   压缩后大小: ${(compressedStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`   压缩率: ${compressionRatio}%`);

        // 备份原始文件
        await fs.rename(inputPath, path.join(imagesDir, `original-${filename}`));
        // 将压缩后的文件改为原始文件名
        await fs.rename(outputPath, inputPath);

    } catch (error) {
        console.error(`❌ 处理 ${filename} 时出错:`, error);
    }
}

async function main() {
    console.log('开始压缩图片...\n');
    
    for (const image of images) {
        await compressImage(image);
        console.log(''); // 空行分隔
    }
    
    console.log('所有图片处理完成！');
    console.log('原始图片已备份为 original-* 文件');
}

main().catch(console.error); 