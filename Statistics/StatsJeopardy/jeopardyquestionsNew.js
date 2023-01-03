var allCategories = [
    ['Statistic Vocabulary', 'Data Classification and Collection', 'Sampling and Biases', 'Frequency Distributions', 'Graphs and Numerical Measures'],
    ['Probability Vocabulary', 'Basic Probability and Counting', 'Conditional Probability', 'Permutations and Combinations', '---'],
    ['Probability Distribution Vocabulary', 'Identifying and Calculating Discrete Distributions', 'Calculating Normal Distributions', 'Sampling & Compound Distributions', '---'],
];

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
            ["MC", "What is the collection of all outcomes, responses, measurements, or counts that are of interest", "Population", "Population", "Parameter", "Sample", "Statistics"],
            ["MC", "What is the name of a data that is far removed from the other entries", "Outlier", "Gaps", "Outliers", "Skews", "Deviations"],
            ["MC", "What is the type of study that relies on mathematical or physical models to reproduce the conditions of a situation or process", "Simulation", "Observational Study", "Simulation", "Experiment", "Survey"],
            ["FB", "What is the value that is in the middle of an ordered set of data", "Median"],
            ["FB", "What is the branch of statistics that involves utilizing data to draw conclusions about a population", "Inferential Statistics"],
        ],
        //Category 2 Questions
        [
            //1 - 2 - Questions
            ["TF", "True or False. Credit card numbers are qualitative data", "TRUE"],
            ["TF", "True or False. Race placements are quantitiative data", "FALSE"],
            ["TF", "True or False. Data at the ratio level of measurement can be qualitative data", "FALSE"],
            ["MC", "Classify the type of data collection: Eight drivers were selected and were asked to drive 500 miles while listening to different genres of music", "Experiment", "Observational Study", "Simulation", "Experiment", "Survey"],
            ["FB", "What is the level of measure of this data: Volume of soup bowls", "Ratio"],
        ],
        //Category 3 Questions
        [
            //1 - 3 - Questions
            ["TF", "True or False. There can only be one type of bias in any statistical study", "FALSE"],
            ["MC", "How many types of sampling methods did we study?", "Five", "Two", "Three", "Four", "Five"],
            ["MC", "Identify this type of bias: 2000 questionaires were went and 100 were received back", "Non-response bias", "Response Bias", "Non-response Bias", "Sampling Error", "Wording Bias"],
            ["MC", "Identify this type of sampling: A random number generator was used to pick 10 people from population of 100", "Simple Random Sample", "Stratified Sampling", "Convenience Sampling", "Systematic Sampling", "Simple Random Sampling"],
            ["MC", "Identify this type of sampling: All high schoolers were divided into their grade levels, and 4 people from each grade are randomly chosen to be interviewed", "Stratified Sample", "Stratified Sampling", "Convenience Sampling", "Systematic Sampling", "Simple Random Sampling"],
        ],
        //Category 4 Questions
        [
            //1 - 4 - Questions
            ["MC", "What is the difference between the maximum and the minimum in a quantitative dataset", "Range", "Class Width", "Range", "Midpoint", "Frequency"],
            ["TF", "True or False. In a Frequency Histogram, the bars must be touching", "TRUE"],
            ["MC", "In a Frequency Distribution, what is the sum of the frequency of that class and all the previous classes", "Cumulative Frequency", "Frequency", "Cumulative Frequency", "Relative Frequency", "Frequency Polygon"],
            ["FB", "Find the midpoint between these two data points: 185, 217", "201"],
            ["FB", "What can be found by dividing the range by the number of desired classes", "Class Width"],
        ],
        //Category 5 Questions
        [
            //1 - 5 - Questions
            ["MC", "What is the type of graph, chart, or plot that is constructed using a circle", "Pie Chart", "Pie Chart", "Bar Chart", "Pareto Chart", "Frequency Histogram"],
            ["TF", "True or False. In a scatterplot, the dots must be connected with a line", "FALSE"],
            ["MC", "What is the type of graph, chart, or plot that is constructed using bars and is ordered from highest to lowest", "Pie Chart", "Pie Chart", "Bar Chart", "Pareto Chart", "Frequency Histogram"],
            ["MC", "How many modes can there be in a dataset that has 10 data points?", "0 to 9", "0 or 1", "0, 1, or 2", "0, 1, 2, or 3", "0 to 10"],
            ["FB", "If the mean is far greater than the median, what is the shape of the distribution?", "Skewed Right"],
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