import { Component, Input, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent {
  @ViewChild("template", { static: true }) template!: TemplateRef<any>;
  @Input() title = "";
}
