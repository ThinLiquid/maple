import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import 'material-symbols';
import "@fontsource/plus-jakarta-sans";
import "@fontsource/syne";

import { NavigationItem } from './material/components/NavigationItem.tsx';
import { List, ListItem, ListItemContent } from './material/components/styled/lists.tsx';
import { NavigationRail, NavigationBar } from './material/components/styled/navigation.tsx';
import { MediumLabel, BodyLarge, BodyMedium } from './material/components/styled/typography.tsx';
import { applyTheme } from '@material/material-color-utilities';
import md from './tokens.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.tsx';

applyTheme(md.theme, {target: document.body, dark: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <NavigationRail>
        <NavigationItem active={true} icon="home">Home</NavigationItem>
        <NavigationItem active={false} icon="search">Search</NavigationItem>
        <NavigationItem active={false} icon="library_music">Library</NavigationItem>
        <div style={{ flex: 1 }}></div>
        <NavigationItem active={false} icon="settings">Settings</NavigationItem>
      </NavigationRail>
      <div className="albums">
        <MediumLabel>Albums</MediumLabel>
        <List>
          <ListItem>
            <img src="https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"></img>
            <ListItemContent>
              <BodyLarge>Lorem ipsum, blah</BodyLarge>
              <BodyMedium>blah, blah, blah</BodyMedium>
            </ListItemContent>
            <i className="material-symbols-rounded">arrow_right</i>
          </ListItem>
          <ListItem>
            <img src="https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"></img>
            <ListItemContent>
              <BodyLarge>Lorem ipsum, blah</BodyLarge>
              <BodyMedium>blah, blah, blah</BodyMedium>
            </ListItemContent>
            <i className="material-symbols-rounded">arrow_right</i>
          </ListItem>
          <ListItem>
            <img src="https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"></img>
            <ListItemContent>
              <BodyLarge>Lorem ipsum, blah</BodyLarge>
              <BodyMedium>blah, blah, blah</BodyMedium>
            </ListItemContent>
            <i className="material-symbols-rounded">arrow_right</i>
          </ListItem>
        </List>
      </div>
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <NavigationBar>
        <NavigationItem active={true} icon="home">Home</NavigationItem>
        <NavigationItem active={false} icon="search">Search</NavigationItem>
        <NavigationItem active={false} icon="library_music">Library</NavigationItem>
        <NavigationItem active={false} icon="settings">Settings</NavigationItem>
      </NavigationBar>
    </main>
  </React.StrictMode>,
)
