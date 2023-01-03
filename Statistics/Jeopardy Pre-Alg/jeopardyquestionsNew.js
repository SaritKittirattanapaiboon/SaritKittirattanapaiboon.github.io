var allCategories = [
    ['Order of Operations', 'Powers and Roots', 'Ratios and Proportions', 'Percentages and Probability', 'Word Problems'], //Set 1
    ['Probability Vocabulary', 'Basic Probability and Counting', 'Conditional Probability', 'Permutations and Combinations', '---'], //Set 2
    ['Probability Distribution Vocabulary', 'Identifying and Calculating Discrete Distributions', 'Calculating Normal Distributions', 'Sampling & Compound Distributions', '---'], //Set 3
];

//Done by row
var allScores = [
    [ //Set 1 Scores
        ['$100', '$100', '$100', '$100', '$200'],
        ['$200', '$200', '$200', '$200', '$400'],
        ['$300', '$300', '$300', '$300', '$600'],
        ['$400', '$400', '$400', '$400', '$800'],
        ['$500', '$500', '$500', '$500', '$1000'],
    ]

]

/*
MC = Multiple Choice
TF = True/False
FB = Fill in the Blank

Question Format:
[Question Type, Question, Answer, Choice 1, Choice 2, Choice 3, Choice 4] **Choice may be empty for TF/FB questions
*/

var questionsList = [
    //Set 1
    [
        //Category 1 Questions
        [
            //1 - 1 - Questions
            ["FB", "6 * 8 + 2", "50"],
            ["FB", "56/7 + 10/2", "13"],
            ["FB", "3 + 12 + 8 + 7 + 15 + 29 + 5 + 11", "90"],
            ["FB", "7 + (-8 - 3) * 4", "-37"],
            ["FB", "(8/9) / (21/81) + (2/7) - (9/14). Answer as a fraction", "43/14"],
        ],
        //Category 2 Questions
        [
            //1 - 2 - Questions
            ["TF", "True or False. x<sup>2</sup> + x = 2x<sup>3</sup>", "FALSE"],
            ["TF", "True or False. There is a real number answer for all cube roots", "TRUE"],
            ["FB", "Find &#8732;<span style='text-decoration:overline'>(256)</span>", "4"],
            ["FB", "Simplify the following expression: (a<sup>3</sup>b<sup>-2</sup>c<sup>7</sup>)/(a<sup>-3</sup>b<sup>2</sup>c<sup>3</sup>)", "(a<sup>6</sup>c<sup>4</sup>)/b<sup>4</sup>"],
            ["FB", "Find &#8731;<span style='text-decoration:overline'>(&#8730;(81) * -1 + 15<sup>2</sup>)</span>", "6"],
        ],
        //Category 3 Questions
        [
            //1 - 3 - Questions
            ["TF", "True or False. A graph of a proportional relationship MUST go through the origin", "TRUE"],
            ["TF", "True or False. One kilometer per five days is a unit rate", "FALSE"],
            ["FB", "With 1 meter = 3.3 feet and 1 feet = 12 inches, find 30 inches in meters to the nearest hundreth", "0.76"],
            ["FB", "Solve the following proportion: (x/20) = (19/24). You may answer as a fraction or round to the nearest tenth.", "95/6 or 15.8"],
            ["FB", "Convert 40 km per hour into miles per 1 minute. 1 km = 0.62 miles or 1 mile = 1.61 km. Answer in decimal to the nearest tenth.", "0.41 miles per 1 minute"],
        ],
        //Category 4 Questions
        [
            //1 - 4 - Questions
            ["TF", "True or False. Probability can only be between 0% and 100%", "FALSE"],
            ["FB", "96 is 40% of what?", "240"],
            ["FB", "You roll a 20 sided die. What is the probability of rolling a multiple of 4? Answer as a percent.", "25%"],
            ["FB", "128 of 54 is what percent? Round to the nearest integer", "237%"],
            ["FB", "You roll a 20 sided die. What is the probability of rolling a multiple of 3 OR an even number? Answer as a percent", "65%"],
        ],
        //Category 5 Questions
        [
            //1 - 5 - Questions
            ["TF", "A person wants to invest $100 in a bank with 5% interest for 2 years. He will get more money if he chooses compound interest compared to simple interest. True or False.", "TRUE"],
            ["FB", "Triangle ABC has side lengths of AB = 5 cm, BC = 8 cm, and AC = 10 cm. A similar triangle XYZ has side XZ = 15 cm. How long is side XY?", "7.5 cm"],
            ["FB", "A recipe for cake requires <sup>3</sup>/<sub>4</sub> cups of milk. Kate bought 12 cups of milk. How many cakes does she need to bake to use up all of the milk?", "16 cakes"],
            ["FB", "The price of a TV is $215 after a 25% markup. What is the original price of the TV?", "$172"],
            ["FB", "Kate takes the three cakes to a party. There are two people that each ate one-third of cake, three people that each ate one-sixth of a cake, and a person that ate half of the cake by themselves. You need to divide the remaining cake evenly between 4 people. How much cake does the last 4 people each get?", "Each person gets 1/3 of a cake"],
        ],
    ],
    //Set 2
    [
        //Category 1 Questions
        [
            //1 - 1 - Questions
            ["MC", "What is the result of a single trial in a probability experiment", "Outcome", "Event", "Simple Event", "Outcome", "Sample Space"],
            ["MC", "What is the probability based on calculating the possibilities and dividing it by the total possibilities", "Classical Probability", "Subjective Probability", "Classical Probability", "Empirical Probability", "Total Frequency"],
            ["MC", "A student keeps getting red cards in a game of UNO and says that their chance of drawing a red card is 100%", "Empirical Probability", "Subjective Probability", "Classical Probability", "Empirical Probability", "Total Frequency"],
            ["MC", "What is the selection of a number of objects where order does not matter", "Combination", "Permutation", "Distinguished Permutation", "Combination", "Factorial"],
            ["MC", "What rule is used to find the probability of two events occurring in a sequence", "Multiplication Rule", "Multiplication Rule", "Addition Rule", "Range of Probabilities Rule", "Fundamental Counting Principle"],
        ],
        //Category 2 Questions
        [
            //1 - 2 - Questions
            ["MC", "What is the probability of rolling an 8 on a 12-sided die", "1/12", "8/12", "3/4", "7/12", "1/12"],
            ["MC", "What is the probability of rolling greater or equal to 15 on a 20-sided die", "3/10", "1/4", "3/10", "1/2", "3/4"],
            ["MC", "What is the probability of drawing a King as the first card in a standard deck", "1/13", "1/52", "1/13", "1/12", "1/4"],
            ["FB", "In a bag with 5 red marbles, 13 green marbles, and 6 blue marbles, what is the probability of drawing a red marble", "5/24"],
            ["FB", "Two coins are flipped. What is the probability of getting at least one tails", "3/4"],
        ],
        //Category 3 Questions
        [
            //1 - 3 - Questions
            ["MC", "Event A is rolling a 12-sided die to try to get a 5. Event B is rolling the same 12-sided die to try to get a number higher than 3. Which of the following is true of these two events?", "Independent and Not Mutually Exclusive", "Independent and Mutually Exclusive", "Independent and Not Mutually Exclusive", "Dependent and Mutually Exclusive", "Dependent and Not Mutually Exclusive"],
            ["MC", "Event A is drawing a card with a value less than 6 from a standard deck of cards. Event B is drawing a Diamond-suit card from the same deck of cards. Which of the following is true of these two events?", "Dependent and Not Mutually Exclusive", "Independent and Mutually Exclusive", "Independent and Not Mutually Exclusive", "Dependent and Mutually Exclusive", "Dependent and Not Mutually Exclusive"],
            ["MC", "Event A is rolling a 12-sided die to try to get a 5. Event B is rolling a different 12-sided die to try to get a 3. Calculate P(A and B)", "1/144", "1/3", "1/12", "1/144", "1/160"],
            ["MC", "Event A is rolling a 20-sided die to try to get a number between 5 and 13, inclusive. Event B is rolling a different 12-sided die to try to get a number between 10 and 15. Calculate P(A or B)", "1/2", "7/10", "11/20", "1/2", "9/20"],
            ["FB", "Event A is flipping two coins and getting two heads. Event B is flipping the same two coins and getting two tails. Calculate P(A and B)", "1/16"],
        ],
        //Category 4 Questions
        [
            //1 - 4 - Questions
            ["MC", "There are four different textbooks. How many ways are there to arrange all four textbooks?", "24", "256", "64", "24", "12"],
            ["MC", "A five digit password is created using the digits 0 to 9 without repeating a number. How many ways are there to create the password?", "30240", "3628800", "30240", "252", "120"],
            ["MC", "How many ways are there to select 3 volunteers from a group of 12 students?", "220", "479001600", "79833600", "1320", "220"],
            ["FB", "A student council has 11 members. How many ways are there to select a president and a vice president?", "110"],
            ["FB", "Out of 20 songs in a playlist, you enjoy 16 of the songs. If the playlist was shuffled, what is the probability that you will not like the first four songs (assume order does not matter)", "1/4845"],
        ],
    ],
    //Set 3
    [
        //Category 1 Questions
        [
            //1 - 1 - Questions
            ["MC", "What is the type of distribution that lists each random variable together with its probablity in a table", "Discrete Probability Distribution", "Frequency Distribution", "Discrete Probability Distribution", "Binomial Distribution", "Normal Distribution"],
            ["TF", "True or False. A Geometric Distribution can be used even if the events are not independent", "FALSE"],
            ["TF", "True or False. In a normal distribution, the mean, median and mode are all approximately equal", "TRUE"],
            ["FB", "What is the type of distribution that counts the number of successes in a fixed number of trials", "Binomial Distribution"],
            ["MC", "What rule is used to find the probability of two events occurring in a sequence", "Central Limit Theorem", "Sampling Distribution", "Population Distribution", "Probability Distribution", "Central Limit Theorem"],
        ],
        //Category 2 Questions
        [
            //1 - 2 - Questions
            ["MC", "Identify the probability distribution to use: Given that 10% of manufactured parts are defective. The manager wants to find the probability that the first defective part found is the 10th part", "Geometric Distribution", "Binomial Distribution", "Geometric Distribution", "Poisson Distribution", "Normal Distribution"],
            ["MC", "Identify the probability distribution to use: The mean number of heart transplants per day is 6, with a success rate of 97%. A doctor wants to find the probability that exactly 18 out of 20 operations are successful", "Binomial Distribution", "Binomial Distribution", "Geometric Distribution", "Poisson Distribution", "Normal Distribution"],
            ["TF", "True or False. A basketball player makes 10 shots out of 12. A friend tells him that the probability of him missing the first shot and making the second is about 14%", "TRUE"],
            ["FB", "Calculate the probability: A soccer player, on average, takes 7 penalty kicks during practice time with a goal rate of 96%. Find the probability that the soccer player takes 10 penalty kicks during practice time", "About 7%"],
            ["FB", "Calculate the probability: A soccer player, on average, takes 7 penalty kicks during practice time with a goal rate of 96%. Find the probability that the soccer player makes more than 10 penalty kicks out of 12", "About 92%"],
        ],
        //Category 3 Questions
        [
            //1 - 3 - Questions
            ["TF", "True or False. You must use a Z-Table to convert between an X-Value and a Z-Value", "FALSE"],
            ["MC", "A dataset has a mean of 12 minutes and a standard deviation of 3 minutes. Given x=15 minutes, find its percentile", "About the 84th percentile", "About the 72nd percentile", "About the 75th percentile", "About the 80th percentile", "About the 84th percentile"],
            ["FB", "A dataset has a mean of 12 minutes and a standard deviation of 3 minutes. If it is at the 24th percentile, find its X-Value", "About 10 minutes"],
            ["FB", "A marathon with 100 people had a finish time of 1.4 hours with a standard deviation of 0.25 hours. If you took exactly 1 hour to run the race, how many people were faster than you?", "About 5-6 people"],
            ["FB", "The english portion of the SAT scores for a certain year has a mean of 670 and a standard deviation of 35. In order to be in the top 10%, what is the lowest possible score you can get?", "Score of 715"],
        ],
        //Category 4 Questions
        [
            //1 - 4 - Questions
            ["TF", "True or False. The mean and standard deviation is the same for both the data and the sampling distribution", "FALSE"],
            ["MC", "A dataset has a sample size of 54, a mean of 98 and a standard deviation of 14. What is the mean and standard deviation for the sampling distribution?", "Mean: 98, Stand Dev: 1.91", "Mean: 98, Stand Dev: 14", "Mean: 98, Stand Dev: 1.91", "Mean: 13.34, Stand Dev: 14", "Mean: 13.34, Stand Dev: 1.91"],
            ["MC", "The maximum speeds of cars are normally distributed, with a mean of 184 km/hr and a standard deviation of 13 km/hr. A sample size of 21 cars is taken and the mean was found to be in the 14th percentile. What is the mean of this sample?", "About 181 km/hr", "About 170 km/hr", "About 177 km/hr", "About 181 km/hr", "About 184 km/hr"],
            ["FB", "An unfair dice has a 42% chance of rolling a 6. What is the probability that you get between 33 and 40 6's out of 100 rolls", "About 31%"],
            ["FB", "An unfair dice has a 42% chance of rolling a 6. What is the probability that you roll 5 6's in a row.", "About 1.3%"],
        ],
    ],
]