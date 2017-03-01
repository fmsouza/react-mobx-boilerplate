import React from 'react';

export default {
    header: {
        brand: {
            title: 'React Application'
        },
        navmenu: {
            link: {
                increment: 'Increment',
                reset: 'Reset'
            }
        }
    },
    home: {
        title: 'Welcome to React',
        intro: count => (
                <span>
                    This is a boilerplate with React + MobX + Bootstrap<br/>
                    and it presents the example code for a counter application<br/>
                    just to show the architecture working.<br/><br/>
                    Counter: {count}
                </span>
            )
    }
};
