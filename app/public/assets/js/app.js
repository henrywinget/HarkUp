$(() => {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAcD-Z-rpHoK5bwrFQ5amWDJneTr-SZ59k",
        authDomain: "project-two-harkup.firebaseapp.com",
        databaseURL: "https://project-two-harkup.firebaseio.com",
        projectId: "project-two-harkup",
        storageBucket: "project-two-harkup.appspot.com",
        messagingSenderId: "614544647683"
    };
    firebase.initializeApp(config);

    // When user click the play button, playback article
    $("#play").on("click", (event) => {
        event.preventDefault();
        const title = $("#article-title").text();
        const content = $("#article-content").text();
        playArticle(title, content);

    });

    // Initialize ResponsiveVoice playback 
    function playArticle(title, content) {
        responsiveVoice.speak(title, "UK English Male");
        responsiveVoice.speak(content, "UK English Female");
    }

    // User login
    $("#login-btn").on("click", (e) => {

        e.preventDefault();

        // Add the FirebaseUI widget element to the DOM
        const body = document.getElementById("body");
        const fbDiv = document.createElement("div");
        fbDiv.setAttribute("id", "firebaseui-auth-container");
        body.appendChild(fbDiv);

        // Initialize sign-in widget from FirebaseUI web
        var uiConfig = {
            // signInSuccessURL will load whenever user signs in, based on auth state change
            signInSuccessUrl: "index",
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };
        $

        // Initialize the FirebaseUI Widget using Firebase
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    });

    // Event listener for when the Sign Up button is clicked
    $("#signup-btn").on("click", (e) => {
        e.preventDefault();

        const newUser = {
            full_name: $("#full_name").val().trim(),
            user_email: $("#user_email").val().trim(),
            user_password: $("#user_password").val().trim(),
            signup_date: moment().format("YYYY-MM-DD HH:mm:ss")
        };

        // User Firebase Authentication
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(newUser.user_email, newUser.user_password);
        promise.catch(err => alert(err.message));

        // console.log(`New Firebase User: ${firebaseUser}`);

        // Send form data to the server
        $.post("/api/signup", newUser).then(data => {
            console.log(`Created new user.`);
        });
    });

    // Event listener for when the user state changes
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            // TODO: Create logged in template to be displayed here
            const user = { user_email: firebaseUser.email };

            console.log(`User Name: ${JSON.stringify(firebaseUser.displayName)}`);
            console.log(`User Email: ${JSON.stringify(firebaseUser.email)}`);

            // send the data to the server to be used in handlebars templates
            $.post("index", user);
        }
        else { console.log("No user logged in."); }
        // console.log("Not logged in");
    });

    // Event listener for when the Logout Button is clicked
    $("#logout-btn").on("click", (e) => {
        console.log("logout button clicked.");
        const user = { user_email: null };
        $.post("/index", user);
        firebase.auth().signOut();
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});