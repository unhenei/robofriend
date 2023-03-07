# robofriend (robot searching webpage)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
It was a project of the ZTM bootcamp; however, I extended the project by adding several features, such as the switch on which category to be searched, and the 'New' button on the top-right corner, where the user could make their own robots and put it in the list.

## Highlights
I added a few features to make it more enjoyable. Originally, I thought about making it more game like, to add a database and a register form, so the user could build their own robot villages, group the robots, add and delete the robots, etc. But the database and register wouldn't be too different from what I have done in another project (face recognition app), so I wanted to put more time on what else I could do.
### Search by category
The first thing I thought about is that, if I am going to search the robot by their names, why not make it more by enabling searching by other category, that is how I came up with the 'search by job' option.<br>
With an easy fix on the state and adding a conditional statement, the search bar offers more flexibility for the users.<br>
This was an idea came from my user experience from other websites, when there are tons of works, we looked for a better searching system other then search on plain text. For example, date, tags, authors, etc.<br>
What could be improved is that maybe added more details for each robots and make a cross searching filter.

### Add new robot
Since it is a robot friend webpage, it came naturally to develop a 'Find New Friend' feature. It was also a part of the original robot villiage site in my mind. That was how the 'New' button on the top-right corner born.<br>
I wanted the user to be able to customize the name and the job for their own robots, which is why the form was all empty when first entering.<br>
However I also took the user experience into consideration. From the designer's viewpoint, I knew what each spaces are for, but it might not be intuitive for the user. That is why I added some instruction on the top of the window, and also made sure to set the placeholder with brief explanation.<br>
Furthermore, I added the 'Random' button, so even if the user don't know what to do with the window, they could at least get a robot by a simple click.

## Limitations and improvements
### Database
What I was not satisfied with the web was the fact that due to the lack of database in this project, I have to store all the plain data in the file, which is not ideal for a real world webpage.

### Mobile Responsive
The 'New' window, which, for me, could be said to be the main focus on the webpage, was built as a fixed window, so the user experience on cross devices was especially bad. It was hard to close the window on a mobile phone. Make it more responsive and think more about how the product should look like on different devices is rather important.

## Conclusion
Aside from the technical skills, the thing I learnt the most from this project is to implement my ideas and concepts in the product development process.<br>
I first had a clear idea of what the final product should look like, then I used the skills I had, or I searched for the ways to put what was in my head into reality. The final result is far from perfect, but I managed to develop a product close to my vision.<br>
The other main takeaway is that after noticing that I could accidentally set too much assumptions and made an unintuitive webpage, I tried to look the product from an outsider's viewpoint, and made several efforts in order to make all the functions look more clearly. This mindset also helped me greatly in the following project.
