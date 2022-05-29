function remakeInvitation(invitation) {
    if (invitation === "")
        return invitation;

    let invitationArray = invitation.toUpperCase().split(";");
    for (let i = 0; i < invitationArray.length; i++)
    {
        let person = invitationArray[i].split(":");
        invitationArray[i] = person[1] + ", " + person[0];
    }
    invitationArray.sort()

    let resultString = "";
    for (let person of invitationArray)
    {
        resultString += "(" + person + ")";
    }

    return resultString;
}

console.log(remakeInvitation("Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
console.log(remakeInvitation(""));