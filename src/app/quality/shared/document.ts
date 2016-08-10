export class Document {
  Id: string;
  AttributeName: string;
  Value: string;
  RuleSummary: string;

constructor(obj?: any) {
    this.Id = obj && obj.id || null;
    this.AttributeName = obj && obj.attributeName || null;
    this.Value = obj && obj.value || null;
    this.RuleSummary = obj && obj.ruleSummary || null;
  }
}
