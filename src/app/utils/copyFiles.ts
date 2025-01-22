import fs from 'fs-extra';
import path from 'path';

interface CopyOptions {
	readonly targets?: readonly Target[]
}

interface Target {
	readonly source: string | readonly string[]
	readonly destination: string | readonly string[]
	readonly rename?: string | ((name: string, extension: string, fullPath: string) => string)
	readonly transform?: (contents: Buffer, name: string) => any
}

/**
 * Copy files from source to destination.
 * @param options
 */
export async function copyFiles(options: CopyOptions): Promise<void> {
	if (!options.targets) return;
	
	try {
		const rootDir: string = path.resolve(__dirname, '../../../');
		
		for (const target of options.targets) {
			const srcPaths = Array.isArray(target.source) ? target.source : [target.source];
			const destPaths = Array.isArray(target.destination) ? target.destination : [target.destination];
			
			for (let i: number = 0; i < srcPaths.length; i++) {
				const srcPath: string = path.resolve(rootDir, srcPaths[i]);
				const destPath: string = path.resolve(rootDir, destPaths[i] || destPaths[0]); // Default to the first destination if only one is provided
				
				if (await fs.pathExists(destPath)) {
					if ((await fs.stat(destPath)).isDirectory()) {
						await fs.remove(destPath); // Remove directory
					} else {
						await fs.unlink(destPath); // Remove file
					}
				}
				
				if (target.transform) {
					const fileContent: Buffer<ArrayBufferLike> = await fs.readFile(srcPath);
					const transformedContent = target.transform(fileContent, path.basename(srcPath));
					
					await fs.outputFile(destPath, transformedContent);
					
					console.log(`Transformed and copied: ${srcPath} -> ${destPath}`);
				} else {
					await fs.copy(srcPath, destPath);
					
					console.log(`Copied: ${srcPath} -> ${destPath}`);
				}
			}
		}
		
		console.log('All files copied successfully!');
	} catch (err) {
		console.error('Error copying files:', err);
	}
}