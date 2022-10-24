// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = function (n) {
    if (n === 2) return 2;
    if (n === 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
};
