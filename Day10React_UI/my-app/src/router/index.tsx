import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HwOne from '../pages/hw1_UI';
import DemoNoteOne from '../pages/video_notes/note1';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
   {
        path:'/', 
        children:[
            {
                path:'/',
                element:<HwOne />
            },
            {
                path:'noteOne',
                element:<DemoNoteOne />
            }
        ]
   },
   {
    path:'*',
    element: <NotFound />
   }
])

export default router;

export const HOME_PATHNAME = '/';
export const HW_NOTE='/noteOne';