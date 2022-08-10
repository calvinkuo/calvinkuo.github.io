function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function romanize()
{
	var input = document.getElementById("ko-text").value;
	var output = "";

	var noun = document.getElementById("cb-noun").checked;
	var proper = document.getElementById("cb-proper").checked;
	var person = document.getElementById("cb-person").checked;
	var translit = document.getElementById("cb-translit").checked;
	var syllables = document.getElementById("cb-syllables").checked;

	// turn hangul to jamo
	input = input.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
	for (var k = 0; k < input.length; k++) {
		var codepoint = input.charAt(k).codePointAt(0) - 44032;
		if (codepoint >= 0 && codepoint <= 11171) {
			output += "<";
			// initial
			switch (Math.floor(codepoint / 588)) {
				case 0: output += "ㄱ";
					break;
				case 1: output += "ㄲ";
					break;
				case 2: output += "ㄴ";
					break;
				case 3: output += "ㄷ";
					break;
				case 4: output += "ㄸ";
					break;
				case 5: output += "ㄹ";
					break;
				case 6: output += "ㅁ";
					break;
				case 7: output += "ㅂ";
					break;
				case 8: output += "ㅃ";
					break;
				case 9: output += "ㅅ";
					break;
				case 10: output += "ㅆ";
					break;
				case 11: output += "ㅇ";
					break;
				case 12: output += "ㅈ";
					break;
				case 13: output += "ㅉ";
					break;
				case 14: output += "ㅊ";
					break;
				case 15: output += "ㅋ";
					break;
				case 16: output += "ㅌ";
					break;
				case 17: output += "ㅍ";
					break;
				case 18: output += "ㅎ";
			}
			
			// medial
			switch (Math.floor(codepoint % 588 / 28)) {
				case 0: output += "ㅏ";
					break;
				case 1: output += "ㅐ";
					break;
				case 2: output += "ㅑ";
					break;
				case 3: output += "ㅒ";
					break;
				case 4: output += "ㅓ";
					break;
				case 5: output += "ㅔ";
					break;
				case 6: output += "ㅕ";
					break;
				case 7: output += "ㅖ";
					break;
				case 8: output += "ㅗ";
					break;
				case 9: output += "ㅘ";
					break;
				case 10: output += "ㅙ";
					break;
				case 11: output += "ㅚ";
					break;
				case 12: output += "ㅛ";
					break;
				case 13: output += "ㅜ";
					break;
				case 14: output += "ㅝ";
					break;
				case 15: output += "ㅞ";
					break;
				case 16: output += "ㅟ";
					break;
				case 17: output += "ㅠ";
					break;
				case 18: output += "ㅡ";
					break;
				case 19: output += "ㅢ";
					break;
				case 20: output += "ㅣ";
			}

			// final
			switch (codepoint % 28) {
				case 1: output += "ㄱ";
					break;
				case 2: output += "ㄲ";
					break;
				case 3: output += "ㄳ";
					break;
				case 4: output += "ㄴ";
					break;
				case 5: output += "ㄵ";
					break;
				case 6: output += "ㄶ";
					break;
				case 7: output += "ㄷ";
					break;
				case 8: output += "ㄹ";
					break;
				case 9: output += "ㄺ";
					break;
				case 10: output += "ㄻ";
					break;
				case 11: output += "ㄼ";
					break;
				case 12: output += "ㄽ";
					break;
				case 13: output += "ㄾ";
					break;
				case 14: output += "ㄿ";
					break;
				case 15: output += "ㅀ";
					break;
				case 16: output += "ㅁ";
					break;
				case 17: output += "ㅂ";
					break;
				case 18: output += "ㅄ";
					break;
				case 19: output += "ㅅ";
					break;
				case 20: output += "ㅆ";
					break;
				case 21: output += "ㅇ";
					break;
				case 22: output += "ㅈ";
					break;
				case 23: output += "ㅊ";
					break;
				case 24: output += "ㅋ";
					break;
				case 25: output += "ㅌ";
					break;
				case 26: output += "ㅍ";
					break;
				case 27: output += "ㅎ";
			}
			
			output += ">";
		} else {
			output += input.charAt(k);
		}
	}

	if (translit && syllables) {
		output = output.replace(/ㄳ/g,"ㄱㅅ").replace(/ㄵ/g,"ㄴㅈ").replace(/ㄶ/g,"ㄴㅎ").replace(/ㄺ/g,"ㄹㄱ").replace(/ㄻ/g,"ㄹㅁ").replace(/ㄼ/g,"ㄹㅂ").replace(/ㄽ/g,"ㄹㅅ").replace(/ㄾ/g,"ㄹㅌ").replace(/ㄿ/g,"ㄹㅍ").replace(/ㅀ/g,"ㄹㅎ").replace(/ㅄ/g,"ㅂㅅ").replace(/<ㄱㅏ/g,"<ga").replace(/<ㄱㅐ/g,"<gae").replace(/<ㄱㅑ/g,"<gya").replace(/<ㄱㅒ/g,"<gyae").replace(/<ㄱㅓ/g,"<geo").replace(/<ㄱㅔ/g,"<ge").replace(/<ㄱㅕ/g,"<gyeo").replace(/<ㄱㅖ/g,"<gye").replace(/<ㄱㅗ/g,"<go").replace(/<ㄱㅘ/g,"<gwa").replace(/<ㄱㅙ/g,"<gwae").replace(/<ㄱㅚ/g,"<goe").replace(/<ㄱㅛ/g,"<gyo").replace(/<ㄱㅜ/g,"<gu").replace(/<ㄱㅝ/g,"<gwo").replace(/<ㄱㅞ/g,"<gwe").replace(/<ㄱㅟ/g,"<gwi").replace(/<ㄱㅠ/g,"<gyu").replace(/<ㄱㅡ/g,"<geu").replace(/<ㄱㅢ/g,"<gui").replace(/<ㄱㅣ/g,"<gi").replace(/<ㄷㅏ/g,"<da").replace(/<ㄷㅐ/g,"<dae").replace(/<ㄷㅑ/g,"<dya").replace(/<ㄷㅒ/g,"<dyae").replace(/<ㄷㅓ/g,"<deo").replace(/<ㄷㅔ/g,"<de").replace(/<ㄷㅕ/g,"<dyeo").replace(/<ㄷㅖ/g,"<dye").replace(/<ㄷㅗ/g,"<do").replace(/<ㄷㅘ/g,"<dwa").replace(/<ㄷㅙ/g,"<dwae").replace(/<ㄷㅚ/g,"<doe").replace(/<ㄷㅛ/g,"<dyo").replace(/<ㄷㅜ/g,"<du").replace(/<ㄷㅝ/g,"<dwo").replace(/<ㄷㅞ/g,"<dwe").replace(/<ㄷㅟ/g,"<dwi").replace(/<ㄷㅠ/g,"<dyu").replace(/<ㄷㅡ/g,"<deu").replace(/<ㄷㅢ/g,"<dui").replace(/<ㄷㅣ/g,"<di").replace(/<ㅂㅏ/g,"<ba").replace(/<ㅂㅐ/g,"<bae").replace(/<ㅂㅑ/g,"<bya").replace(/<ㅂㅒ/g,"<byae").replace(/<ㅂㅓ/g,"<beo").replace(/<ㅂㅔ/g,"<be").replace(/<ㅂㅕ/g,"<byeo").replace(/<ㅂㅖ/g,"<bye").replace(/<ㅂㅗ/g,"<bo").replace(/<ㅂㅘ/g,"<bwa").replace(/<ㅂㅙ/g,"<bwae").replace(/<ㅂㅚ/g,"<boe").replace(/<ㅂㅛ/g,"<byo").replace(/<ㅂㅜ/g,"<bu").replace(/<ㅂㅝ/g,"<bwo").replace(/<ㅂㅞ/g,"<bwe").replace(/<ㅂㅟ/g,"<bwi").replace(/<ㅂㅠ/g,"<byu").replace(/<ㅂㅡ/g,"<beu").replace(/<ㅂㅢ/g,"<bui").replace(/<ㅂㅣ/g,"<bi").replace(/<ㄹㅏ/g,"<la").replace(/<ㄹㅐ/g,"<lae").replace(/<ㄹㅑ/g,"<lya").replace(/<ㄹㅒ/g,"<lyae").replace(/<ㄹㅓ/g,"<leo").replace(/<ㄹㅔ/g,"<le").replace(/<ㄹㅕ/g,"<lyeo").replace(/<ㄹㅖ/g,"<lye").replace(/<ㄹㅗ/g,"<lo").replace(/<ㄹㅘ/g,"<lwa").replace(/<ㄹㅙ/g,"<lwae").replace(/<ㄹㅚ/g,"<loe").replace(/<ㄹㅛ/g,"<lyo").replace(/<ㄹㅜ/g,"<lu").replace(/<ㄹㅝ/g,"<lwo").replace(/<ㄹㅞ/g,"<lwe").replace(/<ㄹㅟ/g,"<lwi").replace(/<ㄹㅠ/g,"<lyu").replace(/<ㄹㅡ/g,"<leu").replace(/<ㄹㅢ/g,"<lui").replace(/<ㄹㅣ/g,"<li").replace(/ㄲ><ㅇ/g,"kk><").replace(/ㄸ><ㅇ/g,"tt><").replace(/ㅆ><ㅇ/g,"ss><").replace(/ㅇ>/g,"ng>").replace(/ㅏ/g,"a").replace(/ㅐ/g,"ae").replace(/ㅑ/g,"ya").replace(/ㅒ/g,"yae").replace(/ㅓ/g,"eo").replace(/ㅔ/g,"e").replace(/ㅕ/g,"yeo").replace(/ㅖ/g,"ye").replace(/ㅗ/g,"o").replace(/ㅘ/g,"wa").replace(/ㅙ/g,"wae").replace(/ㅚ/g,"oe").replace(/ㅛ/g,"yo").replace(/ㅜ/g,"u").replace(/ㅝ/g,"wo").replace(/ㅞ/g,"we").replace(/ㅟ/g,"wi").replace(/ㅠ/g,"yu").replace(/ㅡ/g,"eu").replace(/ㅢ/g,"ui").replace(/ㅣ/g,"i").replace(/ㄱ/g,"g").replace(/ㄲ/g,"kk").replace(/ㄴ/g,"n").replace(/ㄷ/g,"d").replace(/ㄸ/g,"tt").replace(/ㄹ/g,"l").replace(/ㅁ/g,"m").replace(/ㅂ/g,"b").replace(/ㅃ/g,"pp").replace(/ㅅ/g,"s").replace(/ㅆ/g,"ss").replace(/ㅇ/g,"").replace(/ㅈ/g,"j").replace(/ㅉ/g,"jj").replace(/ㅊ/g,"ch").replace(/ㅋ/g,"k").replace(/ㅌ/g,"t").replace(/ㅍ/g,"p").replace(/ㅎ/g,"h").replace(/></g,"-").replace(/>/g,"").replace(/</g,"");
	} else if (translit && !syllables) {
		output = output.replace(/ㄳ/g,"ㄱㅅ").replace(/ㄵ/g,"ㄴㅈ").replace(/ㄶ/g,"ㄴㅎ").replace(/ㄺ/g,"ㄹㄱ").replace(/ㄻ/g,"ㄹㅁ").replace(/ㄼ/g,"ㄹㅂ").replace(/ㄽ/g,"ㄹㅅ").replace(/ㄾ/g,"ㄹㅌ").replace(/ㄿ/g,"ㄹㅍ").replace(/ㅀ/g,"ㄹㅎ").replace(/ㅄ/g,"ㅂㅅ").replace(/<ㄱㅏ/g,"ga").replace(/<ㄱㅐ/g,"gae").replace(/<ㄱㅑ/g,"gya").replace(/<ㄱㅒ/g,"gyae").replace(/<ㄱㅓ/g,"geo").replace(/<ㄱㅔ/g,"ge").replace(/<ㄱㅕ/g,"gyeo").replace(/<ㄱㅖ/g,"gye").replace(/<ㄱㅗ/g,"go").replace(/<ㄱㅘ/g,"gwa").replace(/<ㄱㅙ/g,"gwae").replace(/<ㄱㅚ/g,"goe").replace(/<ㄱㅛ/g,"gyo").replace(/<ㄱㅜ/g,"gu").replace(/<ㄱㅝ/g,"gwo").replace(/<ㄱㅞ/g,"gwe").replace(/<ㄱㅟ/g,"gwi").replace(/<ㄱㅠ/g,"gyu").replace(/<ㄱㅡ/g,"geu").replace(/<ㄱㅢ/g,"gui").replace(/<ㄱㅣ/g,"gi").replace(/<ㄷㅏ/g,"da").replace(/<ㄷㅐ/g,"dae").replace(/<ㄷㅑ/g,"dya").replace(/<ㄷㅒ/g,"dyae").replace(/<ㄷㅓ/g,"deo").replace(/<ㄷㅔ/g,"de").replace(/<ㄷㅕ/g,"dyeo").replace(/<ㄷㅖ/g,"dye").replace(/<ㄷㅗ/g,"do").replace(/<ㄷㅘ/g,"dwa").replace(/<ㄷㅙ/g,"dwae").replace(/<ㄷㅚ/g,"doe").replace(/<ㄷㅛ/g,"dyo").replace(/<ㄷㅜ/g,"du").replace(/<ㄷㅝ/g,"dwo").replace(/<ㄷㅞ/g,"dwe").replace(/<ㄷㅟ/g,"dwi").replace(/<ㄷㅠ/g,"dyu").replace(/<ㄷㅡ/g,"deu").replace(/<ㄷㅢ/g,"dui").replace(/<ㄷㅣ/g,"di").replace(/<ㅂㅏ/g,"ba").replace(/<ㅂㅐ/g,"bae").replace(/<ㅂㅑ/g,"bya").replace(/<ㅂㅒ/g,"byae").replace(/<ㅂㅓ/g,"beo").replace(/<ㅂㅔ/g,"be").replace(/<ㅂㅕ/g,"byeo").replace(/<ㅂㅖ/g,"bye").replace(/<ㅂㅗ/g,"bo").replace(/<ㅂㅘ/g,"bwa").replace(/<ㅂㅙ/g,"bwae").replace(/<ㅂㅚ/g,"boe").replace(/<ㅂㅛ/g,"byo").replace(/<ㅂㅜ/g,"bu").replace(/<ㅂㅝ/g,"bwo").replace(/<ㅂㅞ/g,"bwe").replace(/<ㅂㅟ/g,"bwi").replace(/<ㅂㅠ/g,"byu").replace(/<ㅂㅡ/g,"beu").replace(/<ㅂㅢ/g,"bui").replace(/<ㅂㅣ/g,"bi").replace(/<ㄹㅏ/g,"la").replace(/<ㄹㅐ/g,"lae").replace(/<ㄹㅑ/g,"lya").replace(/<ㄹㅒ/g,"lyae").replace(/<ㄹㅓ/g,"leo").replace(/<ㄹㅔ/g,"le").replace(/<ㄹㅕ/g,"lyeo").replace(/<ㄹㅖ/g,"lye").replace(/<ㄹㅗ/g,"lo").replace(/<ㄹㅘ/g,"lwa").replace(/<ㄹㅙ/g,"lwae").replace(/<ㄹㅚ/g,"loe").replace(/<ㄹㅛ/g,"lyo").replace(/<ㄹㅜ/g,"lu").replace(/<ㄹㅝ/g,"lwo").replace(/<ㄹㅞ/g,"lwe").replace(/<ㄹㅟ/g,"lwi").replace(/<ㄹㅠ/g,"lyu").replace(/<ㄹㅡ/g,"leu").replace(/<ㄹㅢ/g,"lui").replace(/<ㄹㅣ/g,"li").replace(/ㄲ><ㅇ/g,"kk><").replace(/ㄸ><ㅇ/g,"tt><").replace(/ㅆ><ㅇ/g,"ss><").replace(/ㅇ>/g,"ng").replace(/ㅏ/g,"a").replace(/ㅐ/g,"ae").replace(/ㅑ/g,"ya").replace(/ㅒ/g,"yae").replace(/ㅓ/g,"eo").replace(/ㅔ/g,"e").replace(/ㅕ/g,"yeo").replace(/ㅖ/g,"ye").replace(/ㅗ/g,"o").replace(/ㅘ/g,"wa").replace(/ㅙ/g,"wae").replace(/ㅚ/g,"oe").replace(/ㅛ/g,"yo").replace(/ㅜ/g,"u").replace(/ㅝ/g,"wo").replace(/ㅞ/g,"we").replace(/ㅟ/g,"wi").replace(/ㅠ/g,"yu").replace(/ㅡ/g,"eu").replace(/ㅢ/g,"ui").replace(/ㅣ/g,"i").replace(/ㄱ/g,"g").replace(/ㄲ/g,"kk").replace(/ㄴ/g,"n").replace(/ㄷ/g,"d").replace(/ㄸ/g,"tt").replace(/ㄹ/g,"l").replace(/ㅁ/g,"m").replace(/ㅂ/g,"b").replace(/ㅃ/g,"pp").replace(/ㅅ/g,"s").replace(/ㅆ/g,"ss").replace(/ㅇ/g,"").replace(/ㅈ/g,"j").replace(/ㅉ/g,"jj").replace(/ㅊ/g,"ch").replace(/ㅋ/g,"k").replace(/ㅌ/g,"t").replace(/ㅍ/g,"p").replace(/ㅎ/g,"h").replace(/a><a/g,"aa").replace(/a><i/g,"ai").replace(/a><o/g,"ao").replace(/a><u/g,"au").replace(/e><a/g,"ea").replace(/e><i/g,"ei").replace(/e><o/g,"eo").replace(/i></g,"i").replace(/o><a/g,"oa").replace(/o><i/g,"oi").replace(/o><o/g,"oo").replace(/o><u/g,"ou").replace(/u><a/g,"ua").replace(/u><e/g,"ue").replace(/u><o/g,"uo").replace(/u><u/g,"uu").replace(/><y/g,"y").replace(/><w/g,"w").replace(/><s/g,"s").replace(/></g,"-").replace(/>/g,"").replace(/</g,"");
	} else if (person && !translit && syllables) {
		output = output.replace(/ㄳ/g,"ㄱ").replace(/ㄵ/g,"ㄴ").replace(/ㄶ/g,"ㄴ").replace(/ㄺ/g,"ㄱ").replace(/ㄻ/g,"ㅁ").replace(/ㄼ/g,"ㄹ").replace(/ㄽ/g,"ㄹ").replace(/ㄾ/g,"ㄹ").replace(/ㄿ/g,"ㅍ").replace(/ㅀ/g,"ㄹ").replace(/ㅄ/g,"ㅂ").replace(/<ㄱㅏ/g,"<ga").replace(/<ㄱㅐ/g,"<gae").replace(/<ㄱㅑ/g,"<gya").replace(/<ㄱㅒ/g,"<gyae").replace(/<ㄱㅓ/g,"<geo").replace(/<ㄱㅔ/g,"<ge").replace(/<ㄱㅕ/g,"<gyeo").replace(/<ㄱㅖ/g,"<gye").replace(/<ㄱㅗ/g,"<go").replace(/<ㄱㅘ/g,"<gwa").replace(/<ㄱㅙ/g,"<gwae").replace(/<ㄱㅚ/g,"<goe").replace(/<ㄱㅛ/g,"<gyo").replace(/<ㄱㅜ/g,"<gu").replace(/<ㄱㅝ/g,"<gwo").replace(/<ㄱㅞ/g,"<gwe").replace(/<ㄱㅟ/g,"<gwi").replace(/<ㄱㅠ/g,"<gyu").replace(/<ㄱㅡ/g,"<geu").replace(/<ㄱㅢ/g,"<gui").replace(/<ㄱㅣ/g,"<gi").replace(/<ㄷㅏ/g,"<da").replace(/<ㄷㅐ/g,"<dae").replace(/<ㄷㅑ/g,"<dya").replace(/<ㄷㅒ/g,"<dyae").replace(/<ㄷㅓ/g,"<deo").replace(/<ㄷㅔ/g,"<de").replace(/<ㄷㅕ/g,"<dyeo").replace(/<ㄷㅖ/g,"<dye").replace(/<ㄷㅗ/g,"<do").replace(/<ㄷㅘ/g,"<dwa").replace(/<ㄷㅙ/g,"<dwae").replace(/<ㄷㅚ/g,"<doe").replace(/<ㄷㅛ/g,"<dyo").replace(/<ㄷㅜ/g,"<du").replace(/<ㄷㅝ/g,"<dwo").replace(/<ㄷㅞ/g,"<dwe").replace(/<ㄷㅟ/g,"<dwi").replace(/<ㄷㅠ/g,"<dyu").replace(/<ㄷㅡ/g,"<deu").replace(/<ㄷㅢ/g,"<dui").replace(/<ㄷㅣ/g,"<di").replace(/<ㅂㅏ/g,"<ba").replace(/<ㅂㅐ/g,"<bae").replace(/<ㅂㅑ/g,"<bya").replace(/<ㅂㅒ/g,"<byae").replace(/<ㅂㅓ/g,"<beo").replace(/<ㅂㅔ/g,"<be").replace(/<ㅂㅕ/g,"<byeo").replace(/<ㅂㅖ/g,"<bye").replace(/<ㅂㅗ/g,"<bo").replace(/<ㅂㅘ/g,"<bwa").replace(/<ㅂㅙ/g,"<bwae").replace(/<ㅂㅚ/g,"<boe").replace(/<ㅂㅛ/g,"<byo").replace(/<ㅂㅜ/g,"<bu").replace(/<ㅂㅝ/g,"<bwo").replace(/<ㅂㅞ/g,"<bwe").replace(/<ㅂㅟ/g,"<bwi").replace(/<ㅂㅠ/g,"<byu").replace(/<ㅂㅡ/g,"<beu").replace(/<ㅂㅢ/g,"<bui").replace(/<ㅂㅣ/g,"<bi").replace(/<ㄹㅏ/g,"<ra").replace(/<ㄹㅐ/g,"<rae").replace(/<ㄹㅑ/g,"<rya").replace(/<ㄹㅒ/g,"<ryae").replace(/<ㄹㅓ/g,"<reo").replace(/<ㄹㅔ/g,"<re").replace(/<ㄹㅕ/g,"<ryeo").replace(/<ㄹㅖ/g,"<rye").replace(/<ㄹㅗ/g,"<ro").replace(/<ㄹㅘ/g,"<rwa").replace(/<ㄹㅙ/g,"<rwae").replace(/<ㄹㅚ/g,"<roe").replace(/<ㄹㅛ/g,"<ryo").replace(/<ㄹㅜ/g,"<ru").replace(/<ㄹㅝ/g,"<rwo").replace(/<ㄹㅞ/g,"<rwe").replace(/<ㄹㅟ/g,"<rwi").replace(/<ㄹㅠ/g,"<ryu").replace(/<ㄹㅡ/g,"<reu").replace(/<ㄹㅢ/g,"<rui").replace(/<ㄹㅣ/g,"<ri").replace(/ㄲ><ㅇ/g,"kk><").replace(/ㄸ><ㅇ/g,"tt><").replace(/ㅆ><ㅇ/g,"ts><").replace(/ㅇ>/g,"ng>").replace(/ㅏ/g,"a").replace(/ㅐ/g,"ae").replace(/ㅑ/g,"ya").replace(/ㅒ/g,"yae").replace(/ㅓ/g,"eo").replace(/ㅔ/g,"e").replace(/ㅕ/g,"yeo").replace(/ㅖ/g,"ye").replace(/ㅗ/g,"o").replace(/ㅘ/g,"wa").replace(/ㅙ/g,"wae").replace(/ㅚ/g,"oe").replace(/ㅛ/g,"yo").replace(/ㅜ/g,"u").replace(/ㅝ/g,"wo").replace(/ㅞ/g,"we").replace(/ㅟ/g,"wi").replace(/ㅠ/g,"yu").replace(/ㅡ/g,"eu").replace(/ㅢ/g,"ui").replace(/ㅣ/g,"i").replace(/<ㄱ/g,"<g").replace(/<ㄲ/g,"<kk").replace(/<ㄴ/g,"<n").replace(/<ㄷ/g,"<d").replace(/<ㄸ/g,"<tt").replace(/<ㄹ/g,"<r").replace(/<ㅁ/g,"<m").replace(/<ㅂ/g,"<b").replace(/<ㅃ/g,"<pp").replace(/<ㅅ/g,"<s").replace(/<ㅆ/g,"<ss").replace(/<ㅇ/g,"<").replace(/<ㅈ/g,"<j").replace(/<ㅉ/g,"<jj").replace(/<ㅊ/g,"<ch").replace(/<ㅋ/g,"<k").replace(/<ㅌ/g,"<t").replace(/<ㅍ/g,"<p").replace(/<ㅎ/g,"<h").replace(/ㄱ/g,"k").replace(/ㄲ/g,"k").replace(/ㄴ/g,"n").replace(/ㄶ/g,"n").replace(/ㄷ/g,"t").replace(/ㄹ/g,"l").replace(/ㅀ/g,"l").replace(/ㅁ/g,"m").replace(/ㅂ/g,"p").replace(/ㅅ/g,"t").replace(/ㅆ/g,"t").replace(/ㅇ/g,"ng").replace(/ㅈ/g,"t").replace(/ㅊ/g,"t").replace(/ㅋ/g,"k").replace(/ㅌ/g,"t").replace(/ㅍ/g,"p").replace(/ㅎ/g,"").replace(/></g,"-").replace(/>/g,"").replace(/</g,"");
	} else if (person && !translit && !syllables) {
		output = output.replace(/ㄳ/g,"ㄱ").replace(/ㄵ/g,"ㄴ").replace(/ㄶ/g,"ㄴ").replace(/ㄺ/g,"ㄱ").replace(/ㄻ/g,"ㅁ").replace(/ㄼ/g,"ㄹ").replace(/ㄽ/g,"ㄹ").replace(/ㄾ/g,"ㄹ").replace(/ㄿ/g,"ㅍ").replace(/ㅀ/g,"ㄹ").replace(/ㅄ/g,"ㅂ").replace(/<ㄱㅏ/g,"ga").replace(/<ㄱㅐ/g,"gae").replace(/<ㄱㅑ/g,"gya").replace(/<ㄱㅒ/g,"gyae").replace(/<ㄱㅓ/g,"geo").replace(/<ㄱㅔ/g,"ge").replace(/<ㄱㅕ/g,"gyeo").replace(/<ㄱㅖ/g,"gye").replace(/<ㄱㅗ/g,"go").replace(/<ㄱㅘ/g,"gwa").replace(/<ㄱㅙ/g,"gwae").replace(/<ㄱㅚ/g,"goe").replace(/<ㄱㅛ/g,"gyo").replace(/<ㄱㅜ/g,"gu").replace(/<ㄱㅝ/g,"gwo").replace(/<ㄱㅞ/g,"gwe").replace(/<ㄱㅟ/g,"gwi").replace(/<ㄱㅠ/g,"gyu").replace(/<ㄱㅡ/g,"geu").replace(/<ㄱㅢ/g,"gui").replace(/<ㄱㅣ/g,"gi").replace(/<ㄷㅏ/g,"da").replace(/<ㄷㅐ/g,"dae").replace(/<ㄷㅑ/g,"dya").replace(/<ㄷㅒ/g,"dyae").replace(/<ㄷㅓ/g,"deo").replace(/<ㄷㅔ/g,"de").replace(/<ㄷㅕ/g,"dyeo").replace(/<ㄷㅖ/g,"dye").replace(/<ㄷㅗ/g,"do").replace(/<ㄷㅘ/g,"dwa").replace(/<ㄷㅙ/g,"dwae").replace(/<ㄷㅚ/g,"doe").replace(/<ㄷㅛ/g,"dyo").replace(/<ㄷㅜ/g,"du").replace(/<ㄷㅝ/g,"dwo").replace(/<ㄷㅞ/g,"dwe").replace(/<ㄷㅟ/g,"dwi").replace(/<ㄷㅠ/g,"dyu").replace(/<ㄷㅡ/g,"deu").replace(/<ㄷㅢ/g,"dui").replace(/<ㄷㅣ/g,"di").replace(/<ㅂㅏ/g,"ba").replace(/<ㅂㅐ/g,"bae").replace(/<ㅂㅑ/g,"bya").replace(/<ㅂㅒ/g,"byae").replace(/<ㅂㅓ/g,"beo").replace(/<ㅂㅔ/g,"be").replace(/<ㅂㅕ/g,"byeo").replace(/<ㅂㅖ/g,"bye").replace(/<ㅂㅗ/g,"bo").replace(/<ㅂㅘ/g,"bwa").replace(/<ㅂㅙ/g,"bwae").replace(/<ㅂㅚ/g,"boe").replace(/<ㅂㅛ/g,"byo").replace(/<ㅂㅜ/g,"bu").replace(/<ㅂㅝ/g,"bwo").replace(/<ㅂㅞ/g,"bwe").replace(/<ㅂㅟ/g,"bwi").replace(/<ㅂㅠ/g,"byu").replace(/<ㅂㅡ/g,"beu").replace(/<ㅂㅢ/g,"bui").replace(/<ㅂㅣ/g,"bi").replace(/<ㄹㅏ/g,"ra").replace(/<ㄹㅐ/g,"rae").replace(/<ㄹㅑ/g,"rya").replace(/<ㄹㅒ/g,"ryae").replace(/<ㄹㅓ/g,"reo").replace(/<ㄹㅔ/g,"re").replace(/<ㄹㅕ/g,"ryeo").replace(/<ㄹㅖ/g,"rye").replace(/<ㄹㅗ/g,"ro").replace(/<ㄹㅘ/g,"rwa").replace(/<ㄹㅙ/g,"rwae").replace(/<ㄹㅚ/g,"roe").replace(/<ㄹㅛ/g,"ryo").replace(/<ㄹㅜ/g,"ru").replace(/<ㄹㅝ/g,"rwo").replace(/<ㄹㅞ/g,"rwe").replace(/<ㄹㅟ/g,"rwi").replace(/<ㄹㅠ/g,"ryu").replace(/<ㄹㅡ/g,"reu").replace(/<ㄹㅢ/g,"rui").replace(/<ㄹㅣ/g,"ri").replace(/ㄲ><ㅇ/g,"kk><").replace(/ㄸ><ㅇ/g,"tt><").replace(/ㅆ><ㅇ/g,"ts><").replace(/ㅇ>/g,"ng").replace(/ㅏ/g,"a").replace(/ㅐ/g,"ae").replace(/ㅑ/g,"ya").replace(/ㅒ/g,"yae").replace(/ㅓ/g,"eo").replace(/ㅔ/g,"e").replace(/ㅕ/g,"yeo").replace(/ㅖ/g,"ye").replace(/ㅗ/g,"o").replace(/ㅘ/g,"wa").replace(/ㅙ/g,"wae").replace(/ㅚ/g,"oe").replace(/ㅛ/g,"yo").replace(/ㅜ/g,"u").replace(/ㅝ/g,"wo").replace(/ㅞ/g,"we").replace(/ㅟ/g,"wi").replace(/ㅠ/g,"yu").replace(/ㅡ/g,"eu").replace(/ㅢ/g,"ui").replace(/ㅣ/g,"i").replace(/<ㄱ/g,"g").replace(/<ㄲ/g,"kk").replace(/<ㄴ/g,"n").replace(/<ㄷ/g,"d").replace(/<ㄸ/g,"tt").replace(/<ㄹ/g,"r").replace(/<ㅁ/g,"m").replace(/<ㅂ/g,"b").replace(/<ㅃ/g,"pp").replace(/<ㅅ/g,"s").replace(/<ㅆ/g,"ss").replace(/<ㅇ/g,"<").replace(/<ㅈ/g,"j").replace(/<ㅉ/g,"jj").replace(/<ㅊ/g,"ch").replace(/<ㅋ/g,"k").replace(/<ㅌ/g,"t").replace(/<ㅍ/g,"p").replace(/<ㅎ/g,"h").replace(/ㄱ/g,"k").replace(/ㄲ/g,"k").replace(/ㄴ/g,"n").replace(/ㄶ/g,"n").replace(/ㄷ/g,"t").replace(/ㄹ/g,"l").replace(/ㅀ/g,"l").replace(/ㅁ/g,"m").replace(/ㅂ/g,"p").replace(/ㅅ/g,"t").replace(/ㅆ/g,"t").replace(/ㅇ/g,"ng").replace(/ㅈ/g,"t").replace(/ㅊ/g,"t").replace(/ㅋ/g,"k").replace(/ㅌ/g,"t").replace(/ㅍ/g,"p").replace(/ㅎ/g,"").replace(/a><a/g,"aa").replace(/a><i/g,"ai").replace(/a><o/g,"ao").replace(/a><u/g,"au").replace(/e><a/g,"ea").replace(/e><i/g,"ei").replace(/e><o/g,"eo").replace(/i></g,"i").replace(/o><a/g,"oa").replace(/o><i/g,"oi").replace(/o><o/g,"oo").replace(/o><u/g,"ou").replace(/u><a/g,"ua").replace(/u><e/g,"ue").replace(/u><o/g,"uo").replace(/u><u/g,"uu").replace(/><y/g,"y").replace(/><w/g,"w").replace(/><s/g,"s").replace(/></g,"-").replace(/>/g,"").replace(/</g,"");
	} else if (!person && !translit && syllables) {
		output = output.replace(/ㄲ><ㅁ/g,"ng><m").replace(/ㄲ><ㅇ/g,"><kk").replace(/ㅆ><ㄴ/g,"n><n").replace(/ㅆ><ㅁ/g,"n><m").replace(/ㅆ><ㅇ/g,"><s").replace(/ㅀ><ㄱ/g,"l><d").replace(/ㅀ><ㄷ/g,"l><t").replace(/ㅀ><ㄹ/g,"l><r").replace(/ㅀ><ㅅ/g,"l><ss").replace(/ㅀ><ㅈ/g,"l><ch").replace(/ㅄ><ㄹ/g,"p><r").replace(/ㅄ><ㅇ/g,"p><s").replace(/ㅄ><ㅎ/g,"p><h").replace(/ㄳ><ㄹ/g,"k><r").replace(/ㄳ><ㅇ/g,"k><s").replace(/ㄳ><ㅎ/g,"k><h").replace(/ㄵ><ㄹ/g,"n><r").replace(/ㄵ><ㅇ/g,"n><j").replace(/ㄵ><ㅎ/g,"n><ch").replace(/ㄶ><ㄱ/g,"n><k").replace(/ㄶ><ㄴ/g,"n><n").replace(/ㄶ><ㄷ/g,"n><t").replace(/ㄶ><ㄹ/g,"n><r").replace(/ㄶ><ㅅ/g,"n><ss").replace(/ㄶ><ㅇ/g,"><n").replace(/ㄶ><ㅈ/g,"n><ch").replace(/ㄺ><ㄹ/g,"k><r").replace(/ㄺ><ㅇ/g,"l><g").replace(/ㄺ><ㅎ/g,"k><h").replace(/ㄻ><ㅇ/g,"l><m").replace(/ㄼ><ㄴ/g,"m><n").replace(/ㄼ><ㄹ/g,"l><r").replace(/ㄼ><ㅁ/g,"m><m").replace(/ㄼ><ㅇ/g,"l><b").replace(/ㄼ><ㅎ/g,"l><p").replace(/ㄽ><ㄹ/g,"l><r").replace(/ㄽ><ㅇ/g,"l><s").replace(/ㄾ><ㄹ/g,"l><r").replace(/ㄾ><ㅇ/g,"l><t").replace(/ㄿ><ㄴ/g,"m><n").replace(/ㄿ><ㅁ/g,"m><m").replace(/ㄿ><ㅇ/g,"l><p").replace(/ㄳ/g,"ㄱ").replace(/ㄵ/g,"ㄴ").replace(/ㄶ/g,"ㄴ").replace(/ㄺ/g,"ㄱ").replace(/ㄻ/g,"ㅁ").replace(/ㄼ/g,"ㄹ").replace(/ㄽ/g,"ㄹ").replace(/ㄾ/g,"ㄹ").replace(/ㄿ/g,"ㅍ").replace(/ㅀ/g,"ㄹ").replace(/ㅄ/g,"ㅂ").replace(/ㅎ><ㅇ/g,"><").replace(/ㄱ><ㅇ/g,"><g").replace(/ㄱ><ㄴ/g,"ng><n").replace(/ㄱ><ㄹ/g,"ng><n").replace(/ㄱ><ㅁ/g,"ng><m").replace(/ㄱ><ㅋ/g,"k><k").replace(/ㄱ><ㅎ/g,"k><" + (noun ? "h" : "")).replace(/ㄴ><ㄱ/g,"n><g").replace(/ㄴ><ㄹㅗ/g,"n><no").replace(/ㄴ><ㄹ/g,"l><l").replace(/ㄲ><ㄴ/g,"ng><n").replace(/ㄷ><ㅇㅣ/g,"><ji").replace(/ㄷ><ㅇ/g,"><d").replace(/ㄷ><ㄴ/g,"n><n").replace(/ㄷ><ㄹ/g,"t><r").replace(/ㄷ><ㅁ/g,"n><m").replace(/ㄷ><ㅌ/g,"t><t").replace(/ㄷ><ㅎ/g,"><t" + (noun ? "h" : "")).replace(/ㄹ><ㅇ/g,"><r").replace(/ㄹ><ㄴ/g,"l><l").replace(/ㄹ><ㄹ/g,"l><l").replace(/ㅁ><ㄹ/g,"m><n").replace(/ㅂ><ㅇ/g,"><b").replace(/ㅂ><ㄴ/g,"m><n").replace(/ㅂ><ㄹ/g,"m><n").replace(/ㅂ><ㅁ/g,"m><m").replace(/ㅂ><ㅍ/g,"p><p").replace(/ㅂ><ㅎ/g,"><p" + (noun ? "h" : "")).replace(/ㅅ><ㅇ/g,"s><").replace(/ㅅ><ㄴ/g,"n><n").replace(/ㅅ><ㅁ/g,"n><m").replace(/ㅅ><ㅌ/g,"t><t").replace(/ㅅ><ㅎ/g,"><t").replace(/ㅇ><ㅇ/g,"ng><").replace(/ㅇ><ㄹ/g,"ng><n").replace(/ㅈ><ㅇ/g,"><j").replace(/ㅈ><ㄴ/g,"n><n").replace(/ㅈ><ㅁ/g,"n><m").replace(/ㅈ><ㅌ/g,"t><t").replace(/ㅈ><ㅎㅣ/g,"><chi").replace(/ㅈ><ㅎ/g,"><t").replace(/ㅊ><ㅇ/g,"><ch").replace(/ㅊ><ㄴ/g,"n><n").replace(/ㅊ><ㅁ/g,"n><m").replace(/ㅊ><ㅌ/g,"t><t").replace(/ㅊ><ㅎ/g,"><t").replace(/ㅌ><ㅇㅣ/g,"><chi").replace(/ㅌ><ㅇ/g,"><t").replace(/ㅌ><ㄴ/g,"n><n").replace(/ㅌ><ㄹ/g,"t><r").replace(/ㅌ><ㅁ/g,"n><m").replace(/ㅌ><ㅌ/g,"t><t").replace(/ㅌ><ㅎ/g,"><t").replace(/ㅎ><ㄱ/g,"><k").replace(/ㅎ><ㄴ/g,"n><n").replace(/ㅎ><ㄷ/g,"><t").replace(/ㅎ><ㅁ/g,"><m").replace(/ㅎ><ㅅ/g,"><ss").replace(/ㅎ><ㅈ/g,"><ch").replace(/ㅎ><ㅎ/g,"><h").replace(/ㅋ><ㅇ/g,"k><k").replace(/ㅋ><ㄴ/g,"ng><n").replace(/ㅋ><ㅁ/g,"ng><m").replace(/ㅍ><ㅇ/g,"><p").replace(/ㅍ><ㄴ/g,"m><n").replace(/ㅍ><ㅁ/g,"m><m").replace(/<ㄱㅏ/g,"<ga").replace(/<ㄱㅐ/g,"<gae").replace(/<ㄱㅑ/g,"<gya").replace(/<ㄱㅒ/g,"<gyae").replace(/<ㄱㅓ/g,"<geo").replace(/<ㄱㅔ/g,"<ge").replace(/<ㄱㅕ/g,"<gyeo").replace(/<ㄱㅖ/g,"<gye").replace(/<ㄱㅗ/g,"<go").replace(/<ㄱㅘ/g,"<gwa").replace(/<ㄱㅙ/g,"<gwae").replace(/<ㄱㅚ/g,"<goe").replace(/<ㄱㅛ/g,"<gyo").replace(/<ㄱㅜ/g,"<gu").replace(/<ㄱㅝ/g,"<gwo").replace(/<ㄱㅞ/g,"<gwe").replace(/<ㄱㅟ/g,"<gwi").replace(/<ㄱㅠ/g,"<gyu").replace(/<ㄱㅡ/g,"<geu").replace(/<ㄱㅢ/g,"<gui").replace(/<ㄱㅣ/g,"<gi").replace(/<ㄷㅏ/g,"<da").replace(/<ㄷㅐ/g,"<dae").replace(/<ㄷㅑ/g,"<dya").replace(/<ㄷㅒ/g,"<dyae").replace(/<ㄷㅓ/g,"<deo").replace(/<ㄷㅔ/g,"<de").replace(/<ㄷㅕ/g,"<dyeo").replace(/<ㄷㅖ/g,"<dye").replace(/<ㄷㅗ/g,"<do").replace(/<ㄷㅘ/g,"<dwa").replace(/<ㄷㅙ/g,"<dwae").replace(/<ㄷㅚ/g,"<doe").replace(/<ㄷㅛ/g,"<dyo").replace(/<ㄷㅜ/g,"<du").replace(/<ㄷㅝ/g,"<dwo").replace(/<ㄷㅞ/g,"<dwe").replace(/<ㄷㅟ/g,"<dwi").replace(/<ㄷㅠ/g,"<dyu").replace(/<ㄷㅡ/g,"<deu").replace(/<ㄷㅢ/g,"<dui").replace(/<ㄷㅣ/g,"<di").replace(/<ㅂㅏ/g,"<ba").replace(/<ㅂㅐ/g,"<bae").replace(/<ㅂㅑ/g,"<bya").replace(/<ㅂㅒ/g,"<byae").replace(/<ㅂㅓ/g,"<beo").replace(/<ㅂㅔ/g,"<be").replace(/<ㅂㅕ/g,"<byeo").replace(/<ㅂㅖ/g,"<bye").replace(/<ㅂㅗ/g,"<bo").replace(/<ㅂㅘ/g,"<bwa").replace(/<ㅂㅙ/g,"<bwae").replace(/<ㅂㅚ/g,"<boe").replace(/<ㅂㅛ/g,"<byo").replace(/<ㅂㅜ/g,"<bu").replace(/<ㅂㅝ/g,"<bwo").replace(/<ㅂㅞ/g,"<bwe").replace(/<ㅂㅟ/g,"<bwi").replace(/<ㅂㅠ/g,"<byu").replace(/<ㅂㅡ/g,"<beu").replace(/<ㅂㅢ/g,"<bui").replace(/<ㅂㅣ/g,"<bi").replace(/<ㄹㅏ/g,"<ra").replace(/<ㄹㅐ/g,"<rae").replace(/<ㄹㅑ/g,"<rya").replace(/<ㄹㅒ/g,"<ryae").replace(/<ㄹㅓ/g,"<reo").replace(/<ㄹㅔ/g,"<re").replace(/<ㄹㅕ/g,"<ryeo").replace(/<ㄹㅖ/g,"<rye").replace(/<ㄹㅗ/g,"<ro").replace(/<ㄹㅘ/g,"<rwa").replace(/<ㄹㅙ/g,"<rwae").replace(/<ㄹㅚ/g,"<roe").replace(/<ㄹㅛ/g,"<ryo").replace(/<ㄹㅜ/g,"<ru").replace(/<ㄹㅝ/g,"<rwo").replace(/<ㄹㅞ/g,"<rwe").replace(/<ㄹㅟ/g,"<rwi").replace(/<ㄹㅠ/g,"<ryu").replace(/<ㄹㅡ/g,"<reu").replace(/<ㄹㅢ/g,"<rui").replace(/<ㄹㅣ/g,"<ri").replace(/ㄲ><ㅇ/g,"kk><").replace(/ㄸ><ㅇ/g,"tt><").replace(/ㅆ><ㅇ/g,"ts><").replace(/ㅇ>/g,"ng>").replace(/ㅏ/g,"a").replace(/ㅐ/g,"ae").replace(/ㅑ/g,"ya").replace(/ㅒ/g,"yae").replace(/ㅓ/g,"eo").replace(/ㅔ/g,"e").replace(/ㅕ/g,"yeo").replace(/ㅖ/g,"ye").replace(/ㅗ/g,"o").replace(/ㅘ/g,"wa").replace(/ㅙ/g,"wae").replace(/ㅚ/g,"oe").replace(/ㅛ/g,"yo").replace(/ㅜ/g,"u").replace(/ㅝ/g,"wo").replace(/ㅞ/g,"we").replace(/ㅟ/g,"wi").replace(/ㅠ/g,"yu").replace(/ㅡ/g,"eu").replace(/ㅢ/g,"ui").replace(/ㅣ/g,"i").replace(/<ㄱ/g,"<g").replace(/<ㄲ/g,"<kk").replace(/<ㄴ/g,"<n").replace(/<ㄷ/g,"<d").replace(/<ㄸ/g,"<tt").replace(/<ㄹ/g,"<r").replace(/<ㅁ/g,"<m").replace(/<ㅂ/g,"<b").replace(/<ㅃ/g,"<pp").replace(/<ㅅ/g,"<s").replace(/<ㅆ/g,"<ss").replace(/<ㅇ/g,"<").replace(/<ㅈ/g,"<j").replace(/<ㅉ/g,"<jj").replace(/<ㅊ/g,"<ch").replace(/<ㅋ/g,"<k").replace(/<ㅌ/g,"<t").replace(/<ㅍ/g,"<p").replace(/<ㅎ/g,"<h").replace(/ㄱ/g,"k").replace(/ㄲ/g,"k").replace(/ㄴ/g,"n").replace(/ㄶ/g,"n").replace(/ㄷ/g,"t").replace(/ㄹ/g,"l").replace(/ㅀ/g,"l").replace(/ㅁ/g,"m").replace(/ㅂ/g,"p").replace(/ㅅ/g,"t").replace(/ㅆ/g,"t").replace(/ㅇ/g,"ng").replace(/ㅈ/g,"t").replace(/ㅊ/g,"t").replace(/ㅋ/g,"k").replace(/ㅌ/g,"t").replace(/ㅍ/g,"p").replace(/ㅎ/g,"").replace(/></g,"-").replace(/>/g,"").replace(/</g,"");
	} else if (!person && !translit && !syllables) {
		output = output.replace(/ㄲ><ㅁ/g,"ngm").replace(/ㄲ><ㅇ/g,"kk").replace(/ㅆ><ㄴ/g,"nn").replace(/ㅆ><ㅁ/g,"nm").replace(/ㅆ><ㅇ/g,"s").replace(/ㅀ><ㄱ/g,"ld").replace(/ㅀ><ㄷ/g,"lt").replace(/ㅀ><ㄹ/g,"lr").replace(/ㅀ><ㅅ/g,"lss").replace(/ㅀ><ㅈ/g,"lch").replace(/ㅄ><ㄹ/g,"pr").replace(/ㅄ><ㅇ/g,"ps").replace(/ㅄ><ㅎ/g,"ph").replace(/ㄳ><ㄹ/g,"kr").replace(/ㄳ><ㅇ/g,"ks").replace(/ㄳ><ㅎ/g,"kh").replace(/ㄵ><ㄹ/g,"nr").replace(/ㄵ><ㅇ/g,"nj").replace(/ㄵ><ㅎ/g,"nch").replace(/ㄶ><ㄱ/g,"nk").replace(/ㄶ><ㄴ/g,"nn").replace(/ㄶ><ㄷ/g,"nt").replace(/ㄶ><ㄹ/g,"nr").replace(/ㄶ><ㅅ/g,"nss").replace(/ㄶ><ㅇ/g,"n").replace(/ㄶ><ㅈ/g,"nch").replace(/ㄺ><ㄹ/g,"kr").replace(/ㄺ><ㅇ/g,"lg").replace(/ㄺ><ㅎ/g,"kh").replace(/ㄻ><ㅇ/g,"lm").replace(/ㄼ><ㄴ/g,"mn").replace(/ㄼ><ㄹ/g,"lr").replace(/ㄼ><ㅁ/g,"mm").replace(/ㄼ><ㅇ/g,"lb").replace(/ㄼ><ㅎ/g,"lp").replace(/ㄽ><ㄹ/g,"lr").replace(/ㄽ><ㅇ/g,"ls").replace(/ㄾ><ㄹ/g,"lr").replace(/ㄾ><ㅇ/g,"lt").replace(/ㄿ><ㄴ/g,"mn").replace(/ㄿ><ㅁ/g,"mm").replace(/ㄿ><ㅇ/g,"lp").replace(/ㄳ/g,"ㄱ").replace(/ㄵ/g,"ㄴ").replace(/ㄶ/g,"ㄴ").replace(/ㄺ/g,"ㄱ").replace(/ㄻ/g,"ㅁ").replace(/ㄼ/g,"ㄹ").replace(/ㄽ/g,"ㄹ").replace(/ㄾ/g,"ㄹ").replace(/ㄿ/g,"ㅍ").replace(/ㅀ/g,"ㄹ").replace(/ㅄ/g,"ㅂ").replace(/ㅎ><ㅇ/g,"").replace(/ㄱ><ㅇ/g,"g").replace(/ㄱ><ㄴ/g,"ngn").replace(/ㄱ><ㄹ/g,"ngn").replace(/ㄱ><ㅁ/g,"ngm").replace(/ㄱ><ㅋ/g,"k><k").replace(/ㄱ><ㅎ/g,"k" + (noun ? "h" : "")).replace(/ㄴ><ㄱ/g,"n><g").replace(/ㄴ><ㄹㅗ/g,"nno").replace(/ㄴ><ㄹ/g,"ll").replace(/ㄲ><ㄴ/g,"ngn").replace(/ㄷ><ㅇㅣ/g,"ji").replace(/ㄷ><ㅇ/g,"d").replace(/ㄷ><ㄴ/g,"nn").replace(/ㄷ><ㄹ/g,"tr").replace(/ㄷ><ㅁ/g,"nm").replace(/ㄷ><ㅌ/g,"t><t").replace(/ㄷ><ㅎ/g,"t" + (noun ? "h" : "")).replace(/ㄹ><ㅇ/g,"r").replace(/ㄹ><ㄴ/g,"ll").replace(/ㄹ><ㄹ/g,"ll").replace(/ㅁ><ㄹ/g,"mn").replace(/ㅂ><ㅇ/g,"b").replace(/ㅂ><ㄴ/g,"mn").replace(/ㅂ><ㄹ/g,"mn").replace(/ㅂ><ㅁ/g,"mm").replace(/ㅂ><ㅍ/g,"p><p").replace(/ㅂ><ㅎ/g,"p" + (noun ? "h" : "")).replace(/ㅅ><ㅇ/g,"s").replace(/ㅅ><ㄴ/g,"nn").replace(/ㅅ><ㅁ/g,"nm").replace(/ㅅ><ㅌ/g,"t><t").replace(/ㅅ><ㅎ/g,"t").replace(/ㅇ><ㅇ/g,"ng><").replace(/ㅇ><ㄹ/g,"ngn").replace(/ㅈ><ㅇ/g,"j").replace(/ㅈ><ㄴ/g,"nn").replace(/ㅈ><ㅁ/g,"nm").replace(/ㅈ><ㅌ/g,"t><t").replace(/ㅈ><ㅎㅣ/g,"chi").replace(/ㅈ><ㅎ/g,"t").replace(/ㅊ><ㅇ/g,"ch").replace(/ㅊ><ㄴ/g,"nn").replace(/ㅊ><ㅁ/g,"nm").replace(/ㅊ><ㅌ/g,"t><t").replace(/ㅊ><ㅎ/g,"t").replace(/ㅌ><ㅇㅣ/g,"chi").replace(/ㅌ><ㅇ/g,"t").replace(/ㅌ><ㄴ/g,"nn").replace(/ㅌ><ㄹ/g,"tr").replace(/ㅌ><ㅁ/g,"nm").replace(/ㅌ><ㅌ/g,"t><t").replace(/ㅌ><ㅎ/g,"t").replace(/ㅎ><ㄱ/g,"k").replace(/ㅎ><ㄴ/g,"nn").replace(/ㅎ><ㄷ/g,"t").replace(/ㅎ><ㅁ/g,"m").replace(/ㅎ><ㅅ/g,"ss").replace(/ㅎ><ㅈ/g,"ch").replace(/ㅎ><ㅎ/g,"h").replace(/ㅋ><ㅇ/g,"kk").replace(/ㅋ><ㄴ/g,"ngn").replace(/ㅋ><ㅁ/g,"ngm").replace(/ㅍ><ㅇ/g,"p").replace(/ㅍ><ㄴ/g,"mn").replace(/ㅍ><ㅁ/g,"mm").replace(/<ㄱㅏ/g,"ga").replace(/<ㄱㅐ/g,"gae").replace(/<ㄱㅑ/g,"gya").replace(/<ㄱㅒ/g,"gyae").replace(/<ㄱㅓ/g,"geo").replace(/<ㄱㅔ/g,"ge").replace(/<ㄱㅕ/g,"gyeo").replace(/<ㄱㅖ/g,"gye").replace(/<ㄱㅗ/g,"go").replace(/<ㄱㅘ/g,"gwa").replace(/<ㄱㅙ/g,"gwae").replace(/<ㄱㅚ/g,"goe").replace(/<ㄱㅛ/g,"gyo").replace(/<ㄱㅜ/g,"gu").replace(/<ㄱㅝ/g,"gwo").replace(/<ㄱㅞ/g,"gwe").replace(/<ㄱㅟ/g,"gwi").replace(/<ㄱㅠ/g,"gyu").replace(/<ㄱㅡ/g,"geu").replace(/<ㄱㅢ/g,"gui").replace(/<ㄱㅣ/g,"gi").replace(/<ㄷㅏ/g,"da").replace(/<ㄷㅐ/g,"dae").replace(/<ㄷㅑ/g,"dya").replace(/<ㄷㅒ/g,"dyae").replace(/<ㄷㅓ/g,"deo").replace(/<ㄷㅔ/g,"de").replace(/<ㄷㅕ/g,"dyeo").replace(/<ㄷㅖ/g,"dye").replace(/<ㄷㅗ/g,"do").replace(/<ㄷㅘ/g,"dwa").replace(/<ㄷㅙ/g,"dwae").replace(/<ㄷㅚ/g,"doe").replace(/<ㄷㅛ/g,"dyo").replace(/<ㄷㅜ/g,"du").replace(/<ㄷㅝ/g,"dwo").replace(/<ㄷㅞ/g,"dwe").replace(/<ㄷㅟ/g,"dwi").replace(/<ㄷㅠ/g,"dyu").replace(/<ㄷㅡ/g,"deu").replace(/<ㄷㅢ/g,"dui").replace(/<ㄷㅣ/g,"di").replace(/<ㅂㅏ/g,"ba").replace(/<ㅂㅐ/g,"bae").replace(/<ㅂㅑ/g,"bya").replace(/<ㅂㅒ/g,"byae").replace(/<ㅂㅓ/g,"beo").replace(/<ㅂㅔ/g,"be").replace(/<ㅂㅕ/g,"byeo").replace(/<ㅂㅖ/g,"bye").replace(/<ㅂㅗ/g,"bo").replace(/<ㅂㅘ/g,"bwa").replace(/<ㅂㅙ/g,"bwae").replace(/<ㅂㅚ/g,"boe").replace(/<ㅂㅛ/g,"byo").replace(/<ㅂㅜ/g,"bu").replace(/<ㅂㅝ/g,"bwo").replace(/<ㅂㅞ/g,"bwe").replace(/<ㅂㅟ/g,"bwi").replace(/<ㅂㅠ/g,"byu").replace(/<ㅂㅡ/g,"beu").replace(/<ㅂㅢ/g,"bui").replace(/<ㅂㅣ/g,"bi").replace(/<ㄹㅏ/g,"ra").replace(/<ㄹㅐ/g,"rae").replace(/<ㄹㅑ/g,"rya").replace(/<ㄹㅒ/g,"ryae").replace(/<ㄹㅓ/g,"reo").replace(/<ㄹㅔ/g,"re").replace(/<ㄹㅕ/g,"ryeo").replace(/<ㄹㅖ/g,"rye").replace(/<ㄹㅗ/g,"ro").replace(/<ㄹㅘ/g,"rwa").replace(/<ㄹㅙ/g,"rwae").replace(/<ㄹㅚ/g,"roe").replace(/<ㄹㅛ/g,"ryo").replace(/<ㄹㅜ/g,"ru").replace(/<ㄹㅝ/g,"rwo").replace(/<ㄹㅞ/g,"rwe").replace(/<ㄹㅟ/g,"rwi").replace(/<ㄹㅠ/g,"ryu").replace(/<ㄹㅡ/g,"reu").replace(/<ㄹㅢ/g,"rui").replace(/<ㄹㅣ/g,"ri").replace(/ㄲ><ㅇ/g,"kk><").replace(/ㄸ><ㅇ/g,"tt><").replace(/ㅆ><ㅇ/g,"ts><").replace(/ㅇ>/g,"ng").replace(/ㅏ/g,"a").replace(/ㅐ/g,"ae").replace(/ㅑ/g,"ya").replace(/ㅒ/g,"yae").replace(/ㅓ/g,"eo").replace(/ㅔ/g,"e").replace(/ㅕ/g,"yeo").replace(/ㅖ/g,"ye").replace(/ㅗ/g,"o").replace(/ㅘ/g,"wa").replace(/ㅙ/g,"wae").replace(/ㅚ/g,"oe").replace(/ㅛ/g,"yo").replace(/ㅜ/g,"u").replace(/ㅝ/g,"wo").replace(/ㅞ/g,"we").replace(/ㅟ/g,"wi").replace(/ㅠ/g,"yu").replace(/ㅡ/g,"eu").replace(/ㅢ/g,"ui").replace(/ㅣ/g,"i").replace(/<ㄱ/g,"g").replace(/<ㄲ/g,"kk").replace(/<ㄴ/g,"n").replace(/<ㄷ/g,"d").replace(/<ㄸ/g,"tt").replace(/<ㄹ/g,"r").replace(/<ㅁ/g,"m").replace(/<ㅂ/g,"b").replace(/<ㅃ/g,"pp").replace(/<ㅅ/g,"s").replace(/<ㅆ/g,"ss").replace(/<ㅇ/g,"<").replace(/<ㅈ/g,"j").replace(/<ㅉ/g,"jj").replace(/<ㅊ/g,"ch").replace(/<ㅋ/g,"k").replace(/<ㅌ/g,"t").replace(/<ㅍ/g,"p").replace(/<ㅎ/g,"h").replace(/ㄱ/g,"k").replace(/ㄲ/g,"k").replace(/ㄴ/g,"n").replace(/ㄶ/g,"n").replace(/ㄷ/g,"t").replace(/ㄹ/g,"l").replace(/ㅀ/g,"l").replace(/ㅁ/g,"m").replace(/ㅂ/g,"p").replace(/ㅅ/g,"t").replace(/ㅆ/g,"t").replace(/ㅇ/g,"ng").replace(/ㅈ/g,"t").replace(/ㅊ/g,"t").replace(/ㅋ/g,"k").replace(/ㅌ/g,"t").replace(/ㅍ/g,"p").replace(/ㅎ/g,"").replace(/a><a/g,"aa").replace(/a><i/g,"ai").replace(/a><o/g,"ao").replace(/a><u/g,"au").replace(/e><a/g,"ea").replace(/e><i/g,"ei").replace(/e><o/g,"eo").replace(/i></g,"i").replace(/o><a/g,"oa").replace(/o><i/g,"oi").replace(/o><o/g,"oo").replace(/o><u/g,"ou").replace(/u><a/g,"ua").replace(/u><e/g,"ue").replace(/u><o/g,"uo").replace(/u><u/g,"uu").replace(/><y/g,"y").replace(/><w/g,"w").replace(/><s/g,"s").replace(/></g,"-").replace(/>/g,"").replace(/</g,"");
	}

	if (proper) {
		output = toTitleCase(output.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"));
	} else {
		output = output.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");
	}

	document.getElementById("rom-text").value = output;
}