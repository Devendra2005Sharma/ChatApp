// const chatForm = document.getElementById('chatForm');
// const chatArea = document.getElementById('chatArea');
// const userInput = document.getElementById('userInput');

// function addMessage(text, type) {
//   const msg = document.createElement('div');
//   msg.className = type === 'user' ? 'user-message' : 'bot-message';
//   msg.textContent = text;
//   chatArea.appendChild(msg);
//   chatArea.scrollTop = chatArea.scrollHeight;
// }

// chatForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const message = userInputA.value.trim();
//   if (!message) return;

//   addMessage(message, 'user');
//   userInput.value = '';
//   const res = await fetch('/chat', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message })
//   });

//   const data = await res.json();
//   addMessage(data.reply, 'bot');
// });
// const chatForm = document.getElementById('chatForm');
// const chatArea = document.getElementById('chatArea');
// const userInput = document.getElementById('userInput');

// function addMessage(text, type) {
//   const msg = document.createElement('div');
//   msg.className = type === 'user' ? 'user-message' : 'bot-message';
//   msg.textContent = text;
//   chatArea.appendChild(msg);
//   chatArea.scrollTop = chatArea.scrollHeight;
// }

// chatForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const message = userInput.value.trim();
//   if (!message) return;

//   addMessage(message, 'user');
//   userInput.value = '';

//   addMessage("ChatBuddy is typing...", 'bot');
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   const replies = [
//     "That's interesting! ",
//     "Can you tell me more?",
//     "I'm here to help!",
//     "Wow! That’s cool "
//   ];
//   const randomReply = replies[Math.floor(Math.random() * replies.length)];

//   chatArea.lastChild.remove(); // remove typing text
//   addMessage(randomReply, 'bot');
// });
const chatForm = document.getElementById('chatForm');
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');

function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = type === 'user' ? 'user-message' : 'bot-message';
  msg.textContent = text;
  chatArea.appendChild(msg);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    return "Hey there! 👋 I'm ChatBuddy — your friendly DSA and coding assistant.";
  
  if (msg.includes("how are you"))
    return "I'm running at O(1) speed! ⚡ How are you?";
  
  if (msg.includes("your name"))
    return "I'm ChatBuddy 🤖 — your smart coding partner.";
  
  if (msg.includes("bye"))
    return "Goodbye!  Keep learning and coding!";
  
  if (msg.includes("thank"))
    return "You're most welcome! ";

  if (msg.includes("time"))
    return `🕒 Current time: ${new Date().toLocaleTimeString()}`;

  if (msg.includes("date"))
    return `📅 Today's date is ${new Date().toLocaleDateString()}`;

  if (msg.includes("array"))
    return "📘 An *array* is a collection of elements stored at contiguous memory locations. It allows random access using indices, but has fixed size.";
  if (msg.includes("pronoun"))
    return "📘 A *pronoun* is a word used in place of a noun to avoid repetition.";
  if (msg.includes("noun"))
    return "📘 A *noun* is a part of speech that represents a person, place, thing, or idea.";


  if (msg.includes("stack"))
    return "📚 A *stack* is a linear data structure that follows LIFO (Last In, First Out). Examples: undo feature, function call stack.";

  if (msg.includes("queue"))
    return "🚦 A *queue* is a linear structure following FIFO (First In, First Out). Examples: print queue, customer service queue.";

  if (msg.includes("linked list"))
    return "🔗 A *linked list* is a collection of nodes where each node contains data and a reference (link) to the next node.";

  if (msg.includes("tree"))
    return "🌳 A *tree* is a non-linear data structure with nodes connected by edges, having one root node and subtrees. Example: file directory.";

  if (msg.includes("binary search tree") || msg.includes("bst"))
    return "🌲 A *BST* is a tree where the left child < root < right child. It supports efficient search, insertion, and deletion (O(log n) average).";

  if (msg.includes("graph"))
    return "🕸️ A *graph* is a collection of nodes (vertices) and edges. It can be directed or undirected, used to model networks like roads or social connections.";

  if (msg.includes("hash") || msg.includes("hashing"))
    return "⚡ *Hashing* maps data to a fixed-size hash table using a hash function. Used in hash maps for fast data lookup (O(1) average).";

  if (msg.includes("recursion"))
    return "🔁 *Recursion* is a method where a function calls itself to solve smaller subproblems. Example: factorial, Fibonacci sequence.";

  if (msg.includes("time complexity"))
    return "⏱️ *Time complexity* measures how execution time grows with input size. Common notations: O(1), O(log n), O(n), O(n²).";

  if (msg.includes("space complexity"))
    return "💾 *Space complexity* measures the total memory space used by an algorithm as input size grows.";

  if (msg.includes("sorting"))
    return "📊 *Sorting algorithms* arrange data in order. Examples: Bubble Sort, Merge Sort, Quick Sort, Insertion Sort.";

  if (msg.includes("binary search"))
    return "🔍 *Binary Search* works on sorted arrays by repeatedly dividing the search space in half. Time complexity: O(log n).";

  if (msg.includes("dfs"))
    return "🧭 *DFS (Depth First Search)* explores as far as possible along each branch before backtracking. Used in pathfinding and graph traversal.";

  if (msg.includes("bfs"))
    return "🌐 *BFS (Breadth First Search)* explores all nodes at one level before moving to the next. Great for shortest path in unweighted graphs.";

  if (msg.includes("algorithm"))
    return "⚙️ An *algorithm* is a step-by-step procedure to solve a problem. It should be correct, efficient, and finite.";

  if (msg.includes("dynamic programming") || msg.includes("dp"))
    return "🧩 *Dynamic Programming (DP)* is an optimization method that solves overlapping subproblems using memoization or tabulation.";

  
  return "🤔 Hmm... I don't know that one yet. Try asking me about arrays, stacks, recursion, or algorithms!";
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';

  addMessage("ChatBuddy is thinking...", 'bot');
  await new Promise(resolve => setTimeout(resolve, 800));

  const reply = getBotReply(message);
  chatArea.lastChild.remove();
  addMessage(reply, 'bot');
});
