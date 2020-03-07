class TwoFer {
  public static twoFer(/* Parameters go here */ name?: string): string {
    // Your code here
    if (name) {
      return `One for ${name}, one for me.`;
    }
    return "One for you, one for me.";
  }
}

// こちらでもOK
// class TwoFer {
//   public static twoFer(/* Parameters go here */ name = "you"): string {
//     // Your code here
//     return `One for ${name}, one for me.`;
//   }
// }

export default TwoFer;
