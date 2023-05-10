function superbowlWin(superbowlData) {
    const win = superbowlData.find(superbowl => superbowl.result === "W");
    return win ? win.year : undefined;
}