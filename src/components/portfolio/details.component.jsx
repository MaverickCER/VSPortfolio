import React from "react";

const DetailsComponent = ({name}) => {
  return (
    <React.Fragment>
    {
      {
        linkedinemail: (
          <div className="details">
            <h3>Getting Started:</h3><hr/>
            <p>Lead nurturing emails encourage subscribers to interact with your site. The more people interact, the more likely they are to make a purchase. This particular email offers the subscriber a free trial period of a service that offers many benefits in hopes that the user will become a paying customer once the service ends</p>
            <p>This was the first email I built. I liked the challenge presented by the various shades and trying to fully color the backgrounds. The header was more challenging as it is broken into multiple sub sections. The images all have transparent backgrounds so this would not be too hard to make dark mode friendly, but I already altered the walmart email significantly and just wanted this example to be a carbon copy.</p>
          </div>
        ),
        transamericaemail: (
          <div className="details">
            <h3>TransAmerica Email</h3><hr/>
            <p>Milestone emails help your business stand out and remind subscribers of your benefits. This example email from TransAmerica was delivered on my birthday which I thought was a nice personal touch. This was probably the easiest email I made as it was mostly pictures and text in single column layouts. A dark mode was implemented for users that prefer it, but the result isn't as nice because of the bright header and hero section.</p>
          </div>
        ),
        soylentemail: (
          <div className="details">
            <h3>Soylent Email</h3><hr/>
            <p>Newsworthy emails announcing new products are great way to get previous customers to come back in. I've been a follower of Soylent for quite some time but this has got to be their best product announcement! At this point I've found my footing and didn't come across any obstacles!</p>
          </div>
        ),
        displateemail: (
          <div className="details">
            <h3>Displate Email</h3><hr/>
            <p>Promotional emails are the king of catching people's attention. Displate makes great, apartment friendly, wall art and I've used them 3 holidays in a row to create a gorgeous three peice art set.</p>
            <p>As for development, this email was the most intricate and I had some trouble with the active countdown timer. In the end, I decided to implement the same technology as the original email and show the timer through a GIF hosted by sendtric. The original email had some odd spacing on the posters and text so I recreated it here. That being said, I would probbaly recommend using consistent paddings so everything is properly aligned.</p>
          </div>
        ),
        walmartemail: (
          <div className="details">
            <h3>Transitioning from Hobbyist to Professional:</h3><hr/>
            <p>This was my first html email that I wrote after completing an html email series on Udemy. It took me several hours becuase it was my first attempt and the original email utilized a hero image similar to the displate promotional email. I recognized that the patterns in the picture were not too complex. I decided to remake the image as close as possible using border properies. I also paid special attention to the ghost tables or conditional comments to ensure that the email would render correctly in most clients.</p>
            <p>Going from an artist's environment to a more structured one was an interesting experience. I decided that I would try to compose html emails for a full 8 hour work day and use that work as the foundation for this portfolio.</p>
          </div>
        ),
      }[name.slice(0, -5)]
    }
    </React.Fragment>
  );
};

export default DetailsComponent;