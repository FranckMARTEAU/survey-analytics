import { SurveyModel } from "survey-core";
import { DataTables } from "../../src/tables/datatables";
import { ColumnDataType, QuestionLocation } from "../../src/tables/config";

const json = {
  questions: [
    {
      type: "radiogroup",
      name: "car",
      title: "What car are you driving?",
      isRequired: true,
      colCount: 4,
      choices: ["None", "Ford", "Vauxhall"],
    },
    {
      type: "file",
      name: "photo",
    },
  ],
};

test("buildColumns method", () => {
  const survey = new SurveyModel(json);
  const dataTables = new DataTables(survey, [], null);

  const columns = <any>dataTables["buildColumns"](survey);

  expect(JSON.stringify(columns)).toBe(
    '[{"name":"car","displayName":"What car are you driving?","dataType":0,"isPublic":true,"location":0},{"name":"photo","displayName":"photo","dataType":1,"isPublic":true,"location":0}]'
  );
});

test("getColumns method", () => {
  const survey = new SurveyModel(json);
  const dataTables = new DataTables(survey, [], null);

  const columns = <any>dataTables.getColumns();

  expect(JSON.stringify(columns)).toBe(
    '[{"orderable":false,"data":null,"defaultContent":""},{"name":"car","data":"car","sTitle":"What car are you driving?","orderable":false},{"name":"photo","data":"photo","sTitle":"photo","orderable":false}]'
  );
});
test("pass columns through ctor", () => {
  let dataTables = new DataTables(new SurveyModel(), [], null, [
    {
      name: "id",
      displayName: "Id",
      location: QuestionLocation.Column,
      isVisible: true,
      isPublic: true,
      dataType: ColumnDataType.Text,
    },
    {
      name: "happenedAt",
      displayName: "Happened At",
      location: QuestionLocation.Row,
      isVisible: true,
      isPublic: true,
      dataType: ColumnDataType.Text,
    },
  ]);

  const columns = <any>dataTables.getColumns();
  expect(JSON.stringify(columns)).toBe(
    '[{"orderable":false,"data":null,"defaultContent":""},{"name":"id","data":"id","sTitle":"Id","visible":true,"orderable":false},{"name":"happenedAt","data":"happenedAt","sTitle":"Happened At","visible":false,"orderable":false}]'
  );
});

test.skip("createDetailMarkup method", () => {
  let dataTables = new DataTables(new SurveyModel(), [{}], null, [
    {
      name: "id",
      displayName: "Id",
      location: QuestionLocation.Column,
      isVisible: true,
      isPublic: true,
      dataType: ColumnDataType.Text,
    },
    {
      name: "happenedAt",
      displayName: "Happened At",
      location: QuestionLocation.Row,
      isVisible: true,
      isPublic: true,
      dataType: ColumnDataType.Text,
    },
  ]);

  const detailForm = dataTables["createDetailMarkup"]({});
  expect(detailForm[0].innerHTML).toBe(
    '<td colspan="2">Happened At</td><td></td><td colspan="1"><button class="sa-datatables__button sa-datatables__button--gray">Show as Column</button></td>'
  );
});

test.skip("makeprivate button existance", () => {
  const survey = new SurveyModel(json);
  let dataTables = new DataTables(survey, [], null, undefined);

  expect(
    dataTables["headerButtonCreators"].indexOf(
      dataTables["createColumnPrivateButton"]
    )
  ).toBe(2);

  dataTables = new DataTables(survey, [], null, undefined);

  expect(
    dataTables["headerButtonCreators"].indexOf(
      dataTables["createColumnPrivateButton"]
    )
  ).toBe(-1);
});

test("check that datatables takes into account column's width", () => {
  let dataTables = new DataTables(new SurveyModel(), [], null, [
    {
      name: "q1",
      displayName: "q1",
      location: 0,
      isVisible: true,
      isPublic: true,
      dataType: 0,
      width: 100,
    },
    {
      name: "q2",
      displayName: "q2",
      location: 0,
      isVisible: true,
      isPublic: true,
      dataType: 0,
      width: "200px",
    },
    {
      name: "q3",
      displayName: "q3",
      location: 0,
      isVisible: true,
      isPublic: true,
      dataType: 0,
    },
  ]);

  const columns = <any>dataTables.getColumns();
  expect(columns[1].width).toBe("100px");
  expect(columns[2].width).toBe("200px");
  expect(columns[3].width).toBe(undefined);
});
