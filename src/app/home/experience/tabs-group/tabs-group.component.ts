import { Component, ContentChildren, Input, QueryList, TemplateRef } from "@angular/core";
import { TabComponent } from "./tab/tab.component";

@Component({
  selector: "app-tabs-group",
  templateUrl: "./tabs-group.component.html",
  styleUrls: ["./tabs-group.component.scss"],
})
export class TabsGroupComponent {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
  selectedIndex = 0;

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  getTabTemplateByIndex(index: number): TemplateRef<any> | undefined {
    return this.tabs?.get(index)?.template;
  }
}
