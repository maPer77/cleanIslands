# cleanIslands
JS exercise to identify points connected to the edge of the matrix and clean the points that are islanded.

# Example page
https://maper77.github.io/cleanIslands/


# Link to exercise
https://www.youtube.com/watch?v=4tYoVx0QoN0

When I saw the challenge proposed in this video, I decided to stop watching the video and think of a solution, then I saw that I came to a very similar solution, I believe that for this case it is the most logical way to solve it.

# Problem found

--> Uncaught RangeError: Maximum call stack size exceeded

Using a recursive function works great for a small array, but an array larger than 100x20 ends up with a "Maximum call stack size exceeded" error.

# Solution found:

The solution found was to stop using recursive function and make a stack of values to be checked that feeds itself.

I kept the 2 versions for testing and comparisons.

# Recursive function:
cleanIslands.js
![image info](./img/recursive1.png)
![image info](./img/recursive2.png)

# No recursive function:
cleanIslandsNoRecursive.js
![image info](./img/noRecursive1.png)
![image info](./img/noRecursive2.png)

