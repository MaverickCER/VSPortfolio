import React from "react";

const DetailsComponent = ({ name }) => {
  return (
    <React.Fragment>
      {
        {
          linkedinemail: (
            <div className="details">
              <h3>LinkedIn Email:</h3><hr />
              <p>Lead nurturing emails are a critical part of any sales cycle. They are responsible for increasing sales by maintaining relationships with customers. Ideally, a good lead nurturing email will be targeted, customized, and valuable.</p>
              <p>This a perfect example from LinkedIn as it is sent shortly after looking into a premium account. In this case, it explains the benifits of a premium account and how it can help the user achieve their goals. To increase the value proposition, this email also includes a free month of premium that can be canceled at any time.</p>
              <p>This was the first email I built. I liked the challenge presented by the various shades and trying to fully color the backgrounds. The header was more challenging as it is broken into multiple sub sections. The images all have transparent backgrounds so I may update this to be more dark mode friendly. For now, it remains a carbon copy.</p>
            </div>
          ),
          transamericaemail: (
            <div className="details">
              <h3>TransAmerica Email</h3><hr />
              <p>Milestone emails are automated messages that are a part of the lifecycle routine. They are responsible for improving customer engagment.</p>
              <p>Birthday emails are perhaps the most common example and have a 481% higher transaction rate. This example from TransAmerica stands out by maintaining a fun and complimentary tone while reminding the audience of it's value proposition.</p>
              <p>If I were to make alterations to this email, I'd increase the size of the Follow Us text to 20px and change the color to yellow to match the hero banner. I'd also change the padding so that the text properly aligns on the left for the logo, hero text, and paragraphs. Since the original design was offset, I have left it as close to the original as posible.</p>
            </div>
          ),
          soylentemail: (
            <div className="details">
              <h3>Soylent Email</h3><hr />
              <p>Newsletter emails are sent to inform subscribers about the latest news, updates, or products from your company. They are responsible for keeping subscribers connected, engaged, and informed.</p>
              <p>This example from Soylent is a great attention grabber with a cute hero section that clearly highlights their new product.</p>
              <p>If I could improve this email, I'd change the background of the call to action button to yellow and the text color to black to match the top of the soylent bottle.</p>
            </div>
          ),
          displateemail: (
            <div className="details">
              <h3>Displate Email</h3><hr />
              <p>Promotional emails are sent to inform potential customers about coupons, discounts, or grant access to exclusive content. They are responsible for getting the word out to potential customers about products and services.</p>
              <p>This is a perfect example from Displate as it shows a limited time offer suggests multiple products at a glance. At the end, it even shows the benefits of Displate Club and invites the recipient to join.</p>
              <p>The timer gave me trouble in this email as I could not find a solution that would work with outlook. In the end, I used the same method that was employed by Displate. If I were to make alterations, the posters have inconsistent padding and the laptop image could be better.</p>
            </div>
          ),
          walmartemail: (
            <div className="details">
              <h3>Walmart Email:</h3><hr />
              <p>Survey emails are targeted attempts to collect quantitative data. They are responsible for collecting data, but also for making the customer feel like their opinion is valuable.</p>
              <p>This example from Walmart clearly indicates it's purpose and offers an incentive for completing the redirect survey.</p>
              <p>This email was my favorite to work on becuase I was able to convert many of the images to actual css code. The entire hero section was originally one image, but I separated it and used a different image for the fruit in the background. I also incorperated ghost tables for microsoft office and made the email friendly for dark mode users. I was able to do all this while maintaining the structure of the email at all display sizes. </p>
            </div>
          )
        }[name.slice(0, -5)]
      }
    </React.Fragment>
  );
};

export default DetailsComponent;
