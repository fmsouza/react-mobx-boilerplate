import React from 'react';

export default {
    header: {
        brand: {
            title: 'React Application'
        },
        navmenu: {
            link: {
                increment: 'Increment',
                reset: 'Reset',
                login: 'Login'
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
    },
    
    login: {
        title: 'Login',
        inputs: {
            username: {
                label: 'Username',
                placeholder: 'ultralord@gmail.com'
            },
            password: {
                label: 'Password',
                placeholder: '*********'
            },
            submitButton: {
                label: 'Submit'
            }
        }
    }
};
