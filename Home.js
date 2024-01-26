"use strict"

//Create a Home object.
function Home( path, layContent )
{
		var videoUrl = "https://rb.gy/hdacgf";
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn"),img.SeekTo( parseInt(prompt("",0 )));
        else lay.Animate( "FadeOut" );
    }
    
    this.Sec= function( s )
    {
  //  <img.
        txt1.SetText( s +" = "+totalSeconds );
    }
    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "Top,FillXY,HCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var img = app.CreateVideoView( 1, -1,"showcontrols,Absolute,zoom" );
	img.SetOnReady( ()=>{img.Play();} );
//img.SetBackColor( "#69ffffff" );

	lay.AddChild( img );
	
	var txt1 = app.CreateText( "", 1, -1, "Html,Link" );
	lay.AddChild( txt1 );
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    lay.AddChild( txt );
    
    	img.SetFile( videoUrl );
}
