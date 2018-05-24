$(() => {

    let user = { user_email: null };

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
        console.log("clicked play");

    });

    // Initialize ResponsiveVoice playback 
    function playArticle(title, content) {
        const selectedVoice = $("#voiceselection option:selected").text();
        responsiveVoice.speak(title, selectedVoice);
        responsiveVoice.speak(content, selectedVoice);
    }

    // Event listener for when the Toggle Sidebar button is clicked
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // Event listener for when the Log In button is clicked
    $("#login-btn").on("click", (e) => {

        // e.preventDefault();

        // Initialize sign-in widget from FirebaseUI web
        var uiConfig = {
            // signInSuccessURL will load whenever user signs in, based on auth state change
            signInSuccessUrl: "/user",
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

        let newUser = {
            full_name: $("#full_name").val().trim(),
            user_email: $("#user_email").val().trim(),
            user_password: $("#user_password").val().trim(),
            signup_date: moment().format("YYYY-MM-DD HH:mm:ss")
        };

        // User Firebase Authentication
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(newUser.user_email, newUser.user_password);
        promise.catch(err => alert(err.message));

        Send form data to the server
        $.post("/api/signup", newUser).then(data => {
            console.log(`Created new user.`);
        });
    });

    // Event listener for when the user state changes
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            const user = {
                full_name: firebaseUser.displayName,
                user_email: firebaseUser.email
            };

            console.log(`User Name: ${JSON.stringify(firebaseUser.displayName)}`);
            console.log(`User Email: ${JSON.stringify(firebaseUser.email)}`);

            // send the data to the server to be used in handlebars templates
            $.post("/signed_in", user);
        }
        else {
            $.get("/", data => {
                console.log("No user logged in.");
            });
        }
    });



    // Event listener for when the Logout Button is clicked
    $("#logout-btn").on("click", (e) => {
        firebase.auth().signOut();
        location.reload();
    });

    // Event listener for when the Dashboard link is clicked
    $("#dashboard").on("click", (e) => {
        // Get display UserID, Name, email address, date signed up
        e.preventDefault();

        $.get("/user/dashboard", data => {
            console.log("Dashboard");
        });
    });

    // $("#submit").on("click", (e) => {
    //     $("#articles-here").removeAttr("hidden");

    // });

});