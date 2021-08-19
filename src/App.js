import './App.css';
import TodoList from './features/todos/components/TodoList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import PageNotFound from './features/PageNotFound/PageNotFound';
import DoneList from './features/todos/components/DoneList';
import { Layout, Menu} from 'antd';

function App() {
  const { Header, Content, Footer } = Layout;
  
  return (
    <div className="App">
      <BrowserRouter>
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to = "/">Todo List</Link></Menu.Item>
                <Menu.Item key="2"><Link to = "/done">Done List</Link></Menu.Item>
              </Menu>
            </Header>

            <Content className="site-layout" style={{ padding: '0 0px', marginTop: 64 }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 850 }}>
              <Switch>
                <Route exact path="/" component={TodoList}></Route>
                <Route exact path="/done" component={DoneList}></Route>
                <Route path="*" component={PageNotFound}></Route>
              </Switch>
              </div>
            </Content>

            <Footer className="footer" style={{ textAlign: 'center', maxHeight:55, paddingBottom:20, paddingTop:20, backgroundColor:"#001529", color:"white"}}>ITA-6 ©2021 Created by Jan</Footer>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
