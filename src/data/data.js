const  explorer = {
    id: 1,
    name: 'root',
    isFolder: true,
    items: [
        {
            id: 2,
            name: 'public',
            isFolder: true,
            items: [
                {  id: 3,
                    name: 'Update',
                    isFolder: false,
                    items: []
                  },
                {  id: 4,
                    name: 'Delete',
                    isFolder: true,
                    items: []
                  
                  },
                {  id: 5,
                    name: 'Create',
                    isFolder: false,
                    items: []
                  }
            ]
        },
        {
            id: 6,
            name: 'src',
            isFolder: true,
            items: [
              {
                id: 7,
                name: 'code',
                isFolder: false,
                items: [],
              }
            ]

        },
        {
            id: 7,
            name: 'components',
            isFolder: true,
            items: [
              {
                id: 8,
                name: 'newCode',
                isFolder: false,
                items: []
              }
            ]


        }

    ]     
}


export default explorer;