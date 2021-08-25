export class DiscoveryEvent {
  tags: string[];
  type: 'popup' | 'xpath' | 'style' | 'data' | 'variable' | 'audio' | 'zoom';
  value: any;
  selector?: string;
}
