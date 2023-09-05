import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-custom-expansion-panel",
  templateUrl: "./custom-expansion-panel.component.html",
  styleUrls: ["./custom-expansion-panel.component.scss"]
})
export class CustomExpansionPanelComponent implements OnChanges {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() theme: "primary" | "critical";

  color: string = "#000011";

  panelOpenState: boolean;

  constructor(private host: ElementRef<any>) {}

  ngOnChanges(changes: SimpleChanges) {
    if ("theme" in changes) {
      this.color = this.theme === "primary" ? "#000011" : "#110000";
      this.host.nativeElement.style.setProperty(`--color`, this.color);
    }
  }
}
