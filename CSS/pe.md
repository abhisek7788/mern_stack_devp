what is prompt engeering?
- it is the practice of designing and refining the instructions called prompts given to an AI model to get better and more accurate & more useful o/p.

what is LLM?
- it is an AI model trained massive amount of data to ->
   1. understand language
   2. predict  next word in sentence
   3. generate meaningful response
   ex- google keyword

role of LLM in promt engeering:-
- prompt engeering->how you talk
- LLM-> who you're talking to

- LLM's helps us to->
  1. read our prompt
  2. interpret our intent
  3. generate a good response based on prompt

Module-1:- Introduction to LLM & prompting species
Descriminitive AI:-
- it is a AI technique that helps us to classify the data.
ex- email- spam & not spam
  -face ID (face recognition)
  -netflix rtecomendation etc..

Generative AI:-
- in this AI ,it not only classify the data but it generate some new data through AI.
ex- chatGPT(Text generation/image)
  -MidJourney (image generation)
  -Github copilot (code generation) etc.

Evolution of ->RNN,LSTM & transformer
1. RNN(Recurrent Neural Network)
 - an RNN is a type of neural network designed to process sequential data like-
   - text
   - speech
   - time series etc..
 - it process the data step by step.
 - it remember privious information using hidden state in RNN.
 previous information->RNN-> New information

Disadvantages ->
 1. it cannot remember a long sentence because of short memory.
 2. struggle with reading long sentene.

2. LSTM(LONG short-term memory)
 - it is an improved version of RNN

how LSTM works:-
- lstm uses some gates to control info.
    - forget gate-> removes the useless data.
    - input gate-> adds new data/info.
    - output gate-> decides whats the o/p
- basically it acts like a "smart memory system".

Advantages:-
- it solve RNN's memory problem.
- works well for
    - language translation
    - speech recognition
    - time series prediction

3. Transformer:- it is a modern AI architecture that power LLM's(like chatGPT).

how it works:-
- self attantion mechanism.(it allows to understand context, relation between words & sequence)
- looks at all words at once not step by step.
ex-"the animal didn'tcross the road because it was tired"
-in this ex. ,the transformer understands "it" 

Advantages-
-handle long context very well,
- faster(processing is very fast)
- give more accurate o/p thanRNN/LSTM.

FEATURE           RNN          LSTM         transformer
daTA processing   sequential   sequential   parallel
memory            short        long         very long
speed             slow         slow         fast
performance     

Prompt engeering:-
- by thr help of transformer we can do prompt engeering in a better way.
1. long context: transformer helps to memorise the long cintext given in the prompt.(it works on parallel data processing)
2. contextual understanding : if we can put same word in different form then transformer also understand that word properly. 


ex- Bank(river bank,financial bank)
-ai don't read our words.it read tokens.
- we can't take 1 token as one word,although "unbelievable" word can seggriate to diffnt tokens.
ex- pklaying-> play+ing
    transformation->trans+form+ation
- AI didn't understand wordsn directly so we can segrigate differnt token to form prefix(re-, un-) & suffix (-ing, -ation, -ed) so that AI can recreate some words by recognize it properly.


AI tools         approx token limit
chatGPT          128000 to 256000 token(depending on versions)
gemini           1000000 to 2000000 tokens
claude           200000 tokens (standard) upto 1000000 (enterprize)
perplexity       128000 to 200000 token

context
1. chatgpt- excellent for long discussion, essays , emails , summarization within it's ~128k - ~256k tokens.
2. gemini- processing multiple books,large document scanning , large codebase analysis in one snapshot, complex project tasks across long charts etc..
3. claude- it ideal for large document reasoning/ scanning with more safely.
4. perplexity- uses in various backend model.

str. prompting-
1. role(person role )
2. context
3. task(what action we perform)
4. constraints
we can take some scenirio
simple prompt-> write a cold e mail for google internship
engeering prompt->"act as a carrier coach. write a personalised cold email to a recruiter at google for a data science  internship. mention my proficiency in python &sql. keep it within 150 words."
use case 2 : coding & technical task

simple prompt -> fix this code (some code)

E. prompt -> "act as a senior python developer. review the following code for a log-in logics, identify potential security vulnarabilities and logical errors. provide the corrected code with comments explaining each fix."

module2-core prompting technique
1. zero shot prompting :direct order
- in this prompting we didn't give any ex to aI but we provide a small instruction and we think that by the help of pre trained knowledge,AI will provide the answers
prompt-> battery life of this laptop

2. few  shot prompting:the"pattern maker"
- we have faced some pebm on zero shot prompting because sometimes it failed but in few shot prompting,we have to give 3,4 ex. to understand the pattern of our prompt then it gives a good response.
ex. give the customer feedback in json format.
input/prompt->
  ex1- i love pizza. {"sentiment:+ve level :1"}
  ex2- the delivery ws late.{sentiment:-ve level:0}
  ex3- the food was okey.{sentiment:neutral level:0.5} 

 3.chain of thought(COT): the logical thinker
 - this is the most important - technique to solve complex problem. if we can put anything in AI , and we give prompt "think step by step" but AI will look in full sentence and create the logic then give the output. so it's create a little "hallucination" / confusion. 

- use case ->
- prompt -> "a farmer has 15 sheep. All but 8 die. How much are left ? let's think step-by-step" 

1. total sheep - 15 
2. all but 8 die means only 8 are left but rest sheep are die. 
3. so only 8 sheeps are present. 

final ans - 8 

4. Instruction Prompting : framework

- in this prompting we can put step by step instruction so that it will give the requeired output. 

- persona (role) : "act as a senior python dev"
- constraints(limit) : "don't use external libraries. keep code under 20 lines" 
- specific instruction : "explain the code like i am 5 years old" 

use case -> writting professional email

prompt -> "act as a polite HR manager. write a rejection email for a candidate who cleared the interview but we can't hire due to budget cuts. Mention that we will keep their cv for future. constraints -> keep it simple & empathetic , don't mention the exact budghet amount" 

module-3: advanced prompt engeering frameworks

1. ReAct framework(reason + action)
- before some time AI only think or AI only give the  result but now in ReAct framework AI will work on the basis of a loop ,like it will think first then give the result then think again wheather itnis wright or wrong then again give the result.

use case->researching a market trend with AI with browsing capabilities(like chatGPT search or perplexity)

prompt-> "solve the following task using a thought-action-observation loop. Task: analyze the current stock performance of NVIDIA compared to its competitors in the last 7 days. Instruction: 1. start with a 'Thought' (what do we need to find?) 2. perform an Action (search for the specific data) 3. provide an observation (summarize what we find). 4. repeat until you can provide a final recomendation for a short-term investor"

2. Three of Thoughts(TOT)
- "three of thoughts" is more efficient than "chain of thoughts".
- in "COT" AI can think only for one line but in "TOT" it can seggrigate one line into different branches/nodes like as a tree then think it separately.

use case-> in TOT the strategies are suppose will take A,B& C in these three branches of a line. suppose we find B will work better than C/A then they cancel C/A & take B as resultant.

use case -> in TOT the strategies are suppose will take A, B & C in these 3 branches of a line suppose we find B will work better than C / A then they cancel C / A only take B as the resultant. 

Prompt -> "imagine three different experts are brainstorming a solution to this problem : how can a small local bakery increases it's sales by 50% in 3 months with a budget of only $500 ?"
