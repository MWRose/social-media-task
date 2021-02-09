export const userID = (<p>Participant ID</p>)

export const introText = [
    (<div>
        <h1>Welcome to <b>Connect</b>.</h1>
        <h1>Connect is a game about how people form first impressions online.</h1>
    </div>),

    (<div>
        <h1>Here’s how it works...</h1>
        <p>Connect is a live simulation game. People are participating <i>right now</i> at multiple sites throughout Rhode Island.</p>
        <p>Connect will search your social media networks to see if anyone you know is participating right now.</p>
        <p>On Connect, you will give your first impressions of other people and they will give their first impressions of you.</p>
        <p>Let's get started!</p>
    </div>),

    (<div>
        <h1>Here's how it works.</h1>
        <p>Connect users participating right now will be randomly paired with each other.</p>
        <p>There will be multiple rounds of the game.</p>
        <p>In each round, users will be providing their first impressions of the people they are paired with.</p>
    </div>)
]

export const socialMediaText = [
    (<p>Please check any social media sites you use. <b>Connect</b> will search your contacts to see if anyone you know is participating...</p>),
    
    (<p style={{ color: "red" }}>Remember: Connect is totally private. We will <i>never</i> access your personal information, post anything on your account, or notify your contacts.</p>),
    
    (<div>
        <p>There are a total of <span style={{ color: "lightgreen", fontSize: "larger" }}>53</span> users on Connect.</p>
        <p> You have <span style={{ color: "lightgreen", fontSize: "larger" }}>3</span> friends on Connect right now!</p>
        <p>You have <span style={{ color: "lightgreen", fontSize: "larger" }}>15</span> friends-of-friends on Connect right now!</p>
    </div>),
]

export const profileText = [
    (<h1 style={{ textAlign: "left", fontWeight: "bold" }}>Time to create your profile!</h1>),

    (<div style={{ flex: "auto" }}>
        <p style={{ textAlign: "left" }}>Please upload a photo of yourself.</p>
        <p style={{ textAlign: "left" }}>Other people participating in Connect will see your photo.</p>
    </div>),

    (<p>How much do you like this photo? (Other people won’t see your answer)</p>),

    (<div style={{ flex: "auto" }}>
        <p style={{ textAlign: "left" }}>Please answer a few questions to complete your bio.</p>
        <p style={{ textAlign: "left" }}>Other people participating in Connect will see your bio.</p>
    </div>),

    (<p>Your bio is:</p>),

    (<p>How much does this bio represent who you are? (Other people won't see your answer)</p>),

    (<h1>You're all set!</h1>)
]

export const bioQuestions = {
    town:  "What is your hometown?",
    activity: "What do you like to do in your free time?",
    emoji: "Pick an emoji!"
}

export const emojis = ["🙃","🐳","✨","🎉","🌸","🏆","😻","🌎"]

// the variable names like "town" in "info.town" correspond to the ids in bioQuestions
export const makeBio = (info) => (<span><i>I'm from {info.town} </i>{info.emoji}<i> I love to {info.activity}</i></span>)

export const feelingText = (<div>
    <p>Here are a number of words that describe different feelings and emotions.</p>
    <p>Please indicate how much you feel this way <i>right now</i>, in the present moment.</p>
    <p style={{ color: "red" }}>This information is completely private. Only the researchers will see your ratings.</p>
</div>)

export const feelingList = ["Joyful", "Miserable", "Cheerful", "Mad", "Afraid", "Happy", "Sad", "Scared", "Lively", "Anxious", "Embarrassed", "Proud", "Annoyed"]

export const rateText = (<p style={{ backgroundColor: "#3C3C3C", borderRadius: "10px", padding: "10px", marginTop: "30px" }}>
    How much would you like to be friends with this person?
</p>)

export const interpretationText = (<h1>How much does this person want to be friends with you?</h1>)

export const watchText = {
    withYou: (n) => (<p style={{ marginTop: "10px" }}><b>You</b> and <br /><span style={{ fontSize: "50px" }}><b>{n}</b></span><br /> other people are watching</p>),
    withoutYou: (n) => (<p style={{ marginTop: "20px", fontSize: "larger" }}><span style={{ fontSize: "50px" }}><b>{n}</b></span><br /> people are <br />watching</p>),
    summary: (n) => [
        (<p style={{ fontSize: "60px" }}><b>{n}</b></p>),
        (<span style={{ textAlign: "left" }}>people are <br />watching</span>)
    ]
}

export const tutorialText = [
    (<h1></h1>)
    // (<h1 style={{textAlign: "left"}}>Here's how it will look...</h1>)
]

export const blockBeginningText = [
    (<div>
        <h1>Let’s get started!</h1>
        <p>In Round 1, Connect will randomly select you to view others’ ratings, so you can see what’s happening in the game.</p>
    </div>),
        
    (<div>
        <h1>Great job!</h1>
        <p>In Round 2, you’re the rater!</p>
        <p>Connect will randomly pair you with other users, and you will rate how much you think you’d like to be friends with them.</p>
    </div>),

    (<div>
        <h1>Now it’s your turn!</h1>,
        <p>In Round 3, you’ll get to see what other users think of you!</p>,
        <p>Connect will randomly pair you with other users, and they will rate how much they’d like to be friends with you.</p>
    </div>)
]

export const betweenBlocksText = [
    (<h1>Let's continue.</h1>)
]

export const endingText = [
    (<h1>You're all done.</h1>)
]