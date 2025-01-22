export interface AssetInfo {
  type: 'image' | 'svg' | 'video';
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  sources?: string[];
  duration?: number;
  isGif?: boolean;
}