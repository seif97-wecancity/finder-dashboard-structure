import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: "Manage Cars",
        link: '/home',
    },
    {
      id: 4,
      label: 'Lookups',
      subItems: [
        {
            id: 5,
            label: 'Manage Branch',
            link: '/lookups/viewbranch',
            parentId: 4
        },
        {
            id: 6,
            label: 'Manage Brand',
            link: '/lookups/viewbrand',
            parentId: 4
        },
        {
            id: 7,
            label: 'Manage City',
            link: '/lookups/viewcity',
            parentId: 4
        },
        {
            id: 8,
            label: 'Manage Color',
            link: '/lookups/viewcolor',
            parentId: 4
        },
        {
            id: 9,
            label: 'Manage Pattern',
            link: '/lookups/viewpattern',
            parentId: 4
        },
        {
            id: 10,
            label: 'Manage Motion Vector',
            link: '/lookups/viewmotionvector',
            parentId: 4
        },
        {
            id: 10,
            label: 'Manage Insurance',
            link: '/lookups/viewinsurance',
            parentId: 4
        },
        {
            id: 10,
            label: 'Manage Series',
            link: '/lookups/viewseries',
            parentId: 4
        },
        {
            id: 11,
            label: 'Manage Suppliers',
            link: '/lookups/viewsuppliers',
            parentId: 4
        },
        {
            id: 13,
            label: 'Manage Supplier Car',
            link: '/lookups/viewcarsuppliers',
            parentId: 4
        },
        {
            id: 12,
            label: 'Manage Users',
            link: '/lookups/viewusers',
            parentId: 4
        },
      ]
    },
    {
      id: 12,
      label: 'Client',
      subItems: [
        {
            id: 13,
            label: 'Manage Clients',
            link: '/client/viewclients',
            parentId: 12
        },
        {
            id: 14,
            label: 'Manage Client Installment',
            link: '/client/viewclientinstallment',
            parentId: 12
        }
      ]
    },
    {
      id: 15,
      label: 'Company',
      subItems: [
        {
            id: 16,
            label: 'Manage Company',
            link: '/company/viewcompany',
            parentId: 15
        },
        {
            id: 17,
            label: 'Manage Company Type',
            link: '/company/viewcompanytype',
            parentId: 15
        },
        // {
        //     id: 18,
        //     label: 'Manage Company Installments',
        //     link: '/company/viewcompanyinstallment',
        //     parentId: 15
        // },
        {
            id: 19,
            label: 'Manage Company Employee',
            link: '/company/viewcompanyemployee',
            parentId: 15
        },
      ]
    },
    {
      id: 20,
      label: 'Request',
      link: '/lookups/viewrequest',
    }
    // {
    //   id: 20,
    //   label: 'Installment',
    //   subItems: [
    //     {
    //         id: 21,
    //         label: 'Manage Installments',
    //         link: '/installments/viewinstallment',
    //         parentId: 20
    //     },
    //     {
    //         id: 22,
    //         label: 'Manage Installment steps',
    //         link: '/installments/viewinstallmentstep',
    //         parentId: 20
    //     },
        
    //   ]
    // },
    
];

