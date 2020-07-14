import { ActionsHelper } from "../../utils";
import { localization } from "../../localizationManager";
import { ColumnVisibility, QuestionLocation } from "../config";
import { Table } from "../table";

export class ColumnTools {
  constructor(
    private targetNode: HTMLElement,
    private table: Table,
    private columnName: string,
    private isTrustedAccess: boolean
  ) {}

  public render() {
    this.targetNode.appendChild(this.createDragBtn());
    if (this.isTrustedAccess)
    this.targetNode.appendChild(this.createColumnPrivateButton());
    this.targetNode.appendChild(this.createSortBtn());
    this.targetNode.appendChild(this.createMoveToDetailsBtn());
    this.targetNode.appendChild(this.createHideBtn());
    this.targetNode.appendChild(this.createFilterInput());
  }

  protected createDragBtn(): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.className = "sa-table__svg-button sa-table__drag-button";
    btn.appendChild(ActionsHelper.createSvgElement("drag"));
    btn.onclick = (e) => {
      e.stopPropagation();
    };
    return btn;
  }

  protected createSortBtn(): HTMLButtonElement {
    const descTitle = localization.getString("descOrder");
    const ascTitle = localization.getString("ascOrder");
    var btn = ActionsHelper.createSvgButton("sorting");
    btn.title = ascTitle;
    var direction = "asc";
    btn.onclick = (e) => {
      if (direction == "asc") {
        btn.title = descTitle;
        direction = "desc";
      } else {
        btn.title = ascTitle;
        direction = "asc";
      }
      this.table.sortByColumn(this.columnName, direction);
    };
    btn.ondrag = (e) => {
      e.stopPropagation();
    };
    return btn;
  }

  protected createHideBtn(): HTMLButtonElement {
    var btn = ActionsHelper.createSvgButton("hide");
    btn.title = localization.getString("hideColumn");
    btn.onclick = () => {
      this.table.setColumnVisibility(
        this.columnName,
        ColumnVisibility.Invisible
      );
    };
    return btn;
  }

  protected createMoveToDetailsBtn(): HTMLButtonElement {
    const button = ActionsHelper.createSvgButton("movetodetails");
    button.title = localization.getString("moveToDetail");
    button.onclick = (e) => {
      e.stopPropagation();
      this.table.setColumnLocation(this.columnName, QuestionLocation.Row);
    };
    return button;
  }

  protected createFilterInput(): HTMLInputElement {
    var el = document.createElement("input");
    el.className = "sa-table__filter";
    el.placeholder = "Search...";
    el.onclick = (e) => e.stopPropagation();
    el.onchange = (e) => {
      this.table.applyColumnFilter(this.columnName, el.value);
    };
    return el;
  }

  protected createColumnPrivateButton(): HTMLElement {
    const column = this.table.columns.filter(
      (column) => column.name === this.columnName
    )[0];
    const button = document.createElement("button");
    const makePrivateSvg = ActionsHelper.createSvgElement("makeprivate");
    const makePublicSvg = ActionsHelper.createSvgElement("makepublic");
    updateState(column.visibility);
    button.appendChild(makePrivateSvg);
    button.appendChild(makePublicSvg);
    button.onclick = (e) => {
      e.stopPropagation();

      if (column.visibility === ColumnVisibility.PublicInvisible) {
        column.visibility = ColumnVisibility.Visible;
      } else {
        column.visibility = ColumnVisibility.PublicInvisible;
      }

      updateState(column.visibility);
    };

    function updateState(visibility: ColumnVisibility) {
      const isPrivate = visibility === ColumnVisibility.PublicInvisible;
      if (isPrivate) {
        button.className =
          "sa-datatables__svg-button sa-datatables__svg-button--active";
        button.title = localization.getString("makePublicColumn");
        makePrivateSvg.style.display = "block";
        makePublicSvg.style.display = "none";
      } else {
        button.className = "sa-datatables__svg-button";
        button.title = localization.getString("makePrivateColumn");
        makePrivateSvg.style.display = "none";
        makePublicSvg.style.display = "block";
      }
    }

    return button;
  }
}