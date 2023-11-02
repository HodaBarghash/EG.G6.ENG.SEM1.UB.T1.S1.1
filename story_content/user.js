function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jjBHx2oR23":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v25q1attempts:player.GetVar("v25q1attempts"),v25q1answeredcorrect:player.GetVar("v25q1answeredcorrect"),v25q2attempts:player.GetVar("v25q2attempts"),v25q2answeredcorrect:player.GetVar("v25q2answeredcorrect"),v25q3attempts:player.GetVar("v25q3attempts"),v25q3answeredcorrect:player.GetVar("v25q3answeredcorrect")})
	}
	)
}

