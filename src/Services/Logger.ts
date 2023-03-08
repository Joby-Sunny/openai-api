export class Logger {
  public static info(...params: any[]): void {
    const timeNow = new Date().toISOString();
    console.log(`[${timeNow}]::`, ...params);
  }

  public static error(...params: any[]): void {
    const timeNow = new Date().toISOString();
    console.error(`[${timeNow}]::`, ...params);
  }
  
  public static debug = console.log;
}
