let beloeb = Math.floor(Math.random() * 101);

function beregnMoms(beloeb, moms = 0.25) {
  console.log("Beløb uden moms:", beloeb);
  console.log("Moms:", beloeb * moms);
  console.log("Beløb med moms:", beloeb * (1 + moms));
}

beregnMoms(beloeb);
