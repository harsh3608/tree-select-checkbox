import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';

 
interface CustomObject {
  code_type_id: number;
  order: number;
  artifact_id: number;
  artifact_guid: string;
  name: string;
  parent_artifact_id?: number;
}
interface TreeNode {
  key: string;
  label: string;
  data: string;
  icon: string;
  children: TreeNode[];
}
interface Artifact {
  key: number;
  label: string;
  id: number;
  parent_artifact_id: number | null;
  children: Artifact[];
}



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TreeSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  newChoices: any[] = [
    {
      "code_type_id": 1000130,
      "order": 100,
      "artifact_id": 1039988,
      "artifact_guid": "9566d2ef-4dd5-478a-806e-21e2f137558f",
      "name": "Custom MC1",
      "parent_artifact_id": 1003663
    },
    {
      "code_type_id": 1000130,
      "order": 200,
      "artifact_id": 1039989,
      "artifact_guid": "df13c9f6-82eb-4b71-8c6f-215c328b89c6",
      "name": "Custom MC2",
      "parent_artifact_id": 1003663
    },
    {
      "code_type_id": 1000130,
      "order": 301,
      "artifact_id": 1039990,
      "artifact_guid": "9fb72b5d-d2e1-410f-9276-fec36cf5be9b",
      "name": "Custom MC2A",
      "parent_artifact_id": 1039989
    },
    {
      "code_type_id": 1000130,
      "order": 402,
      "artifact_id": 1039991,
      "artifact_guid": "46e2c7c8-fb20-4e9a-bac9-603121150cb9",
      "name": "Custom MC2A1",
      "parent_artifact_id": 1039990
    },
    {
      "code_type_id": 1000130,
      "order": 503,
      "artifact_id": 1039992,
      "artifact_guid": "2e30b404-6f46-48b9-a40d-e1ca7da282c8",
      "name": "Custom MC2B",
      "parent_artifact_id": 1039989
    }
  ];

  convertedArray: TreeNode[] = [];

  // nodes: any[] = [
  //   {
  //     key: '0',
  //     label: 'Documents',
  //     data: 'Documents Folder',
  //     icon: 'pi pi-fw pi-inbox',
  //     children: [
  //       {
  //         key: '0-0',
  //         label: 'Work',
  //         data: 'Work Folder',
  //         icon: 'pi pi-fw pi-cog',
  //         children: [
  //           { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
  //           { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
  //         ]
  //       },
  //       {
  //         key: '0-1',
  //         label: 'Home',
  //         data: 'Home Folder',
  //         icon: 'pi pi-fw pi-home',
  //         children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
  //       }
  //     ]
  //   },
  //   {
  //     key: '1',
  //     label: 'Events',
  //     data: 'Events Folder',
  //     icon: 'pi pi-fw pi-calendar',
  //     children: [
  //       { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
  //       { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
  //       { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
  //     ]
  //   },
  //   {
  //     key: '2',
  //     label: 'Movies',
  //     data: 'Movies Folder',
  //     icon: 'pi pi-fw pi-star-fill',
  //     children: [
  //       {
  //         key: '2-0',
  //         icon: 'pi pi-fw pi-star-fill',
  //         label: 'Al Pacino',
  //         data: 'Pacino Movies',
  //         children: [
  //           { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
  //           { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
  //         ]
  //       },
  //       {
  //         key: '2-1',
  //         label: 'Robert De Niro',
  //         icon: 'pi pi-fw pi-star-fill',
  //         data: 'De Niro Movies',
  //         children: [
  //           { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
  //           { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  nodes: any[] = [
    {
      "key": 0,
      "label": "Custom MC1",
      "artifact_id": 1039988,
      "parent_artifact_id": 1003663,
      "order": 100,
      "children": []
    },
    {
      "key": 1,
      "label": "Custom MC2",
      "artifact_id": 1039989,
      "parent_artifact_id": 1003663,
      "order": 200,
      "children": [
        {
          "key": "1-0",
          "label": "Custom MC2A",
          "artifact_id": 1039990,
          "parent_artifact_id": 1039989,
          "order": 301,
          "children": [
            {
              "key": "1-0-0",
              "label": "Custom MC2A1",
              "artifact_id": 1039991,
              "parent_artifact_id": 1039990,
              "order": 402,
              "children": []
            },
            {
              "key": "1-0-1",
              "label": "Custom MC2A2",
              "artifact_id": 1039997,
              "parent_artifact_id": 1039990,
              "order": 403,
              "children": []
            }
          ]
        },
        {
          "key": "1-1",
          "label": "Custom MC2B",
          "artifact_id": 1039992,
          "parent_artifact_id": 1039989,
          "order": 503,
          "children": [
            {
              "key": "1-1-1",
              "label": "Custom MC2B1",
              "artifact_id": 103782,
              "parent_artifact_id": 1039992,
              "order": 603,
              "children": []
            }
          ]
        }
      ]
    }
  ];


  choices1: any[] = [];
  selectedNodes: any;
  selectedValue = new FormControl('');

  selectedFiles: TreeNode[] = [];
  files: any = [{
    "key": "1-1",
    "label": "Custom MC2B",
    "artifact_id": 1039992,
    "parent_artifact_id": 1039989,
    "order": 503,
    "children": [
      {
        "key": "1-1-1",
        "label": "Custom MC2B1",
        "artifact_id": 103782,
        "parent_artifact_id": 1039992,
        "order": 603,
        "children": []
      }
    ]
  }];

  constructor() {

    // console.log(this.nodes);
  }

  ngOnInit(): void {
    this.convertToTree(this.newChoices);

  }

  convertToTree(choices: CustomObject[]): void {
    //let parentIds: number[] = [];
    choices.forEach((choice, index: number) => {
      let newChoice = {
        key: index,
        label: choice.name,
        artifact_id: choice.artifact_id,
        parent_artifact_id: choice.parent_artifact_id,
        order: choice.order,
        children: []
      }; 
      this.choices1.push(newChoice);
      //parentIds.push(choice.parent_artifact_id || 0);
    });
    // const uniqueSet = new Set(parentIds);
    // parentIds = Array.from(uniqueSet);
    // console.log(parentIds);


    this.choices1.forEach(element => {

      let childChoices = this.choices1.filter(x => x.parent_artifact_id === element.artifact_id);
      if (childChoices.length > 0) {
        //#########TEMP
        childChoices.map((obj, index) => {
          obj.key = `${element.key}-${index}`
        })


        ////////////////////////////
        element.children = childChoices;

      }
      //console.log(childChoices);

    });
    console.log(this.choices1);

    let choices3 = this.choices1.filter(choice => (choice.order % 100) === 0);

    console.log(choices3);
    //this.files = choices3


  }


  logValue() {
    console.log(this.selectedValue);

  }

  onNodeSelect(event: any): void {
    const selectedNode = event.node;

    console.log(selectedNode);

    // Check if the selected node has children
    if (selectedNode.children && selectedNode.children.length > 0) {
      // Handle the selection logic for nodes with children
      // For example, you may choose not to select the parent automatically
    } else {
      // Handle the selection logic for leaf nodes (nodes without children)
      this.selectedNodes = [selectedNode];
    }
  }




















}
