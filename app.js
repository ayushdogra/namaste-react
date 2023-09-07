const heading = React.createElement(
    "div",
     {id :"container"},
    [React.createElement(
    "parent", 
    {id:"parent"},
    React.createElement(
        "child", 
        {id:"child"},
        [React.createElement(
            "h1", 
            {id:"parent"},
            "Heading 1"
             ) ,
             React.createElement(
                "h2", 
                {id:"h2"},
                "Heading 2" ) ] )  
         ) ,
         React.createElement(
            "parent", 
            {id:"parent"},
            React.createElement(
                "child", 
                {id:"child"},
                [React.createElement(
                    "h1", 
                    {id:"parent"},
                    "Heading 1"
                     ) ,
                     React.createElement(
                        "h2", 
                        {id:"h2"},
                        "Heading 2" ) ] )  
                 )   ] 
              
              );

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);     