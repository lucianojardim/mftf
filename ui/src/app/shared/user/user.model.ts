export class User {
  emailAddress: string;
  savedInstructionSheetsIds: number[];
  recentlyDownloadedInstructionSheetIds: number[];

  constructor(emailAddress: string, savedInstructionSheetsIds: number[], recentlyDownloadedInstructionSheetIds: number[]) {
    this.emailAddress = emailAddress;
    this.savedInstructionSheetsIds = savedInstructionSheetsIds;
    this.recentlyDownloadedInstructionSheetIds = recentlyDownloadedInstructionSheetIds;
  }
}
