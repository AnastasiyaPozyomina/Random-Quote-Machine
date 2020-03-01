
    let quotes = [
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen"
      },

      {
        quote: "Elementary, my dear Watson.	",
        author: "Sherlock Holmes (character)"
      },

      {
        quote: "For those to whom much is given, much is required.",
        author: "the Bible"
      },

      {
        quote: "Frankly, my dear, I don't give a damn.",
        author: "Rhett Butler (character)"
      },

      {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
      },

      {
        quote: "He travels the fastest who travels alone.",
        author: "Rudyard Kipling"
      },

      {
        quote: "Hell has no fury like a woman scorned.",
        author: "William Congreve"
      },

      {
        quote: "Hell is other people.",
        author: "Jean-Paul Sartre"
      },
      {
        quote: "Here's looking at you, kid.",
        author: "Rick Blaine (character)"
      },

    ];

    function quoteShow() {
      let arr = Math.floor(Math.random() * quotes.length);
      document.getElementById("text").innerHTML = quotes[arr].quote;
      document.getElementById("author").innerHTML = quotes[arr].author;
    }

    quoteShow();

    document.getElementById("new-quote").addEventListener("click", quoteShow);

