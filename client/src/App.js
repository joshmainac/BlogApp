import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import BlogPost from './BlogPost';
import Footer from './Footer';
import './App.css';
import posts from './posts.json'; // Import the JSON data


const App = () => {
  // Example posts data
  // const posts = [
  //   { id: 1, title: 'Post 1', category: 'Category 1', summary: 'Summary 1', date: 'Date 1' },
  //   { id: 2, title: 'Post 2', category: 'Category 2', summary: 'Summary 2', date: 'Date 2' },
  //   {
  //     id: 3,
  //     title: '5 Easy Home Workouts for Beginners',
  //     category: 'Health & Fitness',
  //     summary: 'Discover five simple and effective workouts you can do at home without any equipment. Perfect for beginners looking to start their fitness journey.',
  //     date: '2023-11-01'
  //   },
  //   {
  //     id: 4,
  //     title: 'The Best Budget-Friendly Travel Destinations in 2023',
  //     category: 'Travel',
  //     summary: 'Explore our top picks for budget-friendly travel destinations in 2023. From hidden gems to popular spots, find out where you can travel without breaking the bank.',
  //     date: '2023-10-15'
  //   },

  //   // Add more posts here
  // ];

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              {posts.map((post) => (
                <BlogPost key={post.id} {...post} />
              ))}
            </Route>
            <Route path="/post/:id" render={(props) => {
              const post = posts.find(post => post.id.toString() === props.match.params.id);
              return post ? <BlogPost {...post} /> : <h2>Post Not Found</h2>;
            }} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
