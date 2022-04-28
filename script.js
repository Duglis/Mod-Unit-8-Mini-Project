var action = ["https://whsat-imagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg , https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg", "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_1400x2100_he.jpg?itok=ruA2hZJw"];
let comedy = ["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg","https://upload.wikimedia.org/wikipedia/en/5/5c/Home_Team_%282022_film%29.jpg"];
let drama = ["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg", "https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoV9bwMPyip-cb4GKQDOCQZ9Ov2JQGQMcFsqRn0KemzzEZZogAoFu_oyjs-NzC6OvLy8&usqp=CAU"];

$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    //Write code for Task Two below this line!
    //2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.

    if (genreInput === "action") {
        for (let show of action) {
            $(".shows").append("img src=" + show + ">");
        }
    } else if (genreInput === "comedy") {
        for (let show of comedy) {
            $(".shows").append("img src=" + show + ">");
        }
    } else if (genreInput === "drama") {
        for (let show of drama) {
            $(".shows").append("<img src=" + show + ">");
        }
    }
});

$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
    //Write code for Task Three below this line!
    //3. Write a code using .push to allow the user to make TV show suggestions.
    //ex. comedy.push(suggestion);
    // console.log(comedy);

    action.push(suggestion);
    console.log(action);
    comedy.push(suggestion);
    console.log(comedy);
    drama.push(suggestion);
    console.log(drama);


});