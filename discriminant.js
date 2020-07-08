let lines = new Array("fr-line", "sc-line", "tr-line", "fu-line", "fv-line", "sx-line", "sv-line", "eg-line", "nn-line", "tn-line", "el-line", "tw-line", "tn-line", "fn-line", "sn-line", "svn-line", "en-line", "nnn-line");   

function setCoef() {
   let a, b, c, sqr_b, a_mult_c, discriminant, inv_b, dbl_b;
   let radical_of_discriminant, inv_a_mult_c, dbl_a_mult_c, s_a_mult_c;
        a = prompt("Введите первый коэффициент");
		b = prompt("Введите второй коэффициент");
		c = prompt("Введите третий коэффициент");
    dbl_b = b * 2;
    inv_b = b - dbl_b;
    sqr_b = b * b;
    a_mult_c = 4 * a * c;
    discriminant = sqr_b - a_mult_c;
    if(a_mult_c >= 0) {
            document.getElementById(lines[1]).innerHTML = "Через дискриминант:"+"<br/><br/>D = b^2 - 4 a c<br/>D = "+sqr_b+" - "+a_mult_c+" = "+discriminant;
    }
    if(a_mult_c < 0) {
        s_a_mult_c = a_mult_c;
        dbl_a_mult_c = s_a_mult_c * 2;
        inv_a_mult_c = s_a_mult_c - dbl_a_mult_c;
            document.getElementById(lines[1]).innerHTML = "Через дискриминант:"+"<br/><br/>D = b^2 - 4 a c<br/>D = "+sqr_b+" + "+inv_a_mult_c+" = "+discriminant;
    }
    
        /* Find the radical of discriminant  */
    
        for(let i = 0; i < 50000; i = i + 1) {
            let sqr = i * i;
                if (sqr == discriminant) {
                    radical_of_discriminant = i;
                    break;
                }
				else {
					radical_of_discriminant = 0;
				}
        }
        
        /* Find the unknown numbers */
        
        b = b - dbl_b;
        a = a * 2;
        
        /* First x */
        let x_one_numerator = b + radical_of_discriminant;
        let x_one = x_one_numerator / a;
        
        /* Second x */
        let x_two_numerator = b - radical_of_discriminant;
        let x_two = x_two_numerator / a;
        
        /* Write all actions */
				
            if(discriminant >= 0) {
                if(radical_of_discriminant == 0 && discriminant > 0) {
						document.getElementById(lines[2]).innerHTML = "vD = v"+discriminant;
                        document.getElementById(lines[6]).innerHTML = "X1 = "+x_two+" + v"+discriminant;
                }
                if(radical_of_discriminant > 0 && discriminant > 0) {
					    document.getElementById(lines[2]).innerHTML = "vD = "+radical_of_discriminant;
                        document.getElementById(lines[6]).innerHTML = "X1 = "+x_two;
                }
                if(radical_of_discriminant == 0 && discriminant == 0) {
						document.getElementById(lines[2]).innerHTML = "vD = "+radical_of_discriminant;
                        document.getElementById(lines[6]).innerHTML = "X1 = "+x_two;
                }
                    
                if(radical_of_discriminant == 0 && discriminant > 0) {
                        document.getElementById(lines[7]).innerHTML = "X2 = "+x_one+" - v"+discriminant; 
                }
                if(radical_of_discriminant > 0 && discriminant > 0) {
                        document.getElementById(lines[7]).innerHTML = "X2 = "+x_one;
                }
                if(radical_of_discriminant == 0 && discriminant == 0) {
                        document.getElementById(lines[7]).innerHTML = "X2 = "+x_two;
                }
                
            
            /* Linear factors */
                
                let sign_x_one = " - ";
                let sign_x_two = " - ";
                let sqr_linear_factors = 0;
                let dbl_x, inv_x_one, inv_x_two;
                inv_x_one = x_one;
                inv_x_two = x_two;
                if(x_one < 0) {
                    sign_x_one = " + ";
                    dbl_x = x_one * 2;
                    inv_x_one = x_one - dbl_x;
                }
                if(x_two < 0) {
                    sign_x_two = " + ";
                    dbl_x = x_two * 2;
                    inv_x_two = x_two - dbl_x;
                }
                if(x_one == x_two && sign_x_one == sign_x_two) {
                	sqr_linear_factors = 1;
                }
                
                a = a / 2;
				let l_f = "<br/><br/>Разложение на линейные множители:<br/><br/>";
                    if(radical_of_discriminant > 0 && discriminant > 0) {
                        if(a >= 0 || a < 0) {
                            if(a != -1 && a != 1) {
                            	if(sqr_linear_factors == 0) {
										document.getElementById(lines[8]).innerHTML = l_f;
                                    	document.getElementById(lines[11]).innerHTML =  "(x"+sign_x_one+inv_x_one+")";
                                        document.getElementById(lines[12]).innerHTML = a+"\r(x"+sign_x_two+inv_x_two+")";
                                }
                                else {
										document.getElementById(lines[8]).innerHTML = l_f;
                                		document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")^2";
                                }
                            }
                        }
                       	if(a == -1) {
                       		if(sqr_linear_factors == 0) {
									document.getElementById(lines[8]).innerHTML = l_f;
	                       	        document.getElementById(lines[11]).innerHTML = "-"+"(x"+sign_x_one+inv_x_one+")";
    	                   	        document.getElementById(lines[12]).innerHTML = "\r(x"+sign_x_two+inv_x_two+")";                            
        	                }
        	                else {
									document.getElementById(lines[8]).innerHTML = l_f;
        	                		document.getElementById(lines[11]).innerHTML = "-(x"+sign_x_one+inv_x_one+")^2";
        	                }
        	            }
                        if(a == 1) {
                        	if(sqr_linear_factors == 0) {
									document.getElementById(lines[8]).innerHTML = l_f;
	                                document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")";
    	                            document.getElementById(lines[12]).innerHTML = "\r(x"+sign_x_two+inv_x_two+")";  
							}
							else {
									document.getElementById(lines[8]).innerHTML = l_f;
									document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")";
							}
                        }
                    }
                    if(radical_of_discriminant == 0 && discriminant == 0) {
                        if(a >= 0 || a < 0) {
                            if(a != -1 && a != 1) {
                            	if(sqr_linear_factors == 0) {
										document.getElementById(lines[8]).innerHTML = l_f;
                                    	document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")";
                                        document.getElementById(lines[12]).innerHTML = a+"\r(x"+sign_x_two+inv_x_two+")";
                                }
                                else {
										document.getElementById(lines[8]).innerHTML = l_f;
                                		document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")^2";
                                }
                            }
                        }
                       	if(a == -1) {
                       		if(sqr_linear_factors == 0) {
									document.getElementById(lines[8]).innerHTML = l_f;
	                       	        document.getElementById(lines[11]).innerHTML = "-(x"+sign_x_one+inv_x_one+")";
    	                   	        document.getElementById(lines[12]).innerHTML = "\r(x"+sign_x_two+inv_x_two+")";                            
        	                }
        	                else {
									document.getElementById(lines[8]).innerHTML = l_f;
        	                		document.getElementById(lines[11]).innerHTML = "-(x"+sign_x_one+inv_x_one+")^2";
        	                }
        	            }
                        if(a == 1) {
                        	if(sqr_linear_factors == 0) {
									document.getElementById(lines[8]).innerHTML = l_f;
	                                document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")";
    	                            document.getElementById(lines[12]).innerHTML = "\r(x"+sign_x_two+inv_x_two+")";  
							}
							else {
									document.getElementById(lines[8]).innerHTML = l_f;
									document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+inv_x_one+")^2";
							}
                        }
                    }
                    if(radical_of_discriminant == 0 && discriminant >= 0) {
                        if(a > 1 || a < 1) {
                            if(a != -1 && a != 1) {
										document.getElementById(lines[8]).innerHTML = l_f;
										document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+"("+inv_x_one+"-"+"v"+discriminant+"))";
                                    	document.getElementById(lines[12]).innerHTML = a+"\r(x"+sign_x_one+"("+inv_x_one+"+"+"v"+discriminant+"))";
                            }
                        }
                        if(a == -1) {
									document.getElementById(lines[8]).innerHTML = l_f;
                                	document.getElementById(lines[11]).innerHTML = "-"+"(x"+sign_x_one+"("+inv_x_one+"-"+"v"+discriminant+"))";
                                	document.getElementById(lines[12]).innerHTML = "\r(x"+sign_x_one+"("+inv_x_one+"+"+"v"+discriminant+"))";
                        }
                        if(a == 1) {
								document.getElementById(lines[8]).innerHTML = l_f;
                                document.getElementById(lines[11]).innerHTML = "(x"+sign_x_one+"("+inv_x_one+"-"+"v"+discriminant+"))";
                                document.getElementById(lines[12]).innerHTML = "\r(x"+sign_x_one+"("+inv_x_one +"+"+"v"+discriminant+"))";  
                        }
                    }
                    
                    /* vieta theorem */
                    
                    if(a == 1 && radical_of_discriminant > 0) {                     
                        document.getElementById(lines[14]).innerHTML = "<br/><br/>Через теорему Виета:<br/><br/>X1 + X2 = "+inv_b;
                        document.getElementById(lines[15]).innerHTML = "<br/>X1 * X2 = "+c;
                        document.getElementById(lines[16]).innerHTML = "X1 = "+x_one+"<br/>X2 = "+x_two;
                    }
		    else {
			document.getElementById(lines[14]).innerHTML = "<br/><br/>Невозможно решить через теорему Виета.";    
		    }
            }
            else {
                    document.getElementById(lines[3]).innerHTML = "Корней нет";
            }
}
function resetCoef() {
	let j = 0;
	do {
		document.getElementById(lines[j]).innerHTML = ' ';
		j = j + 1;
	} while(j < 17);
}
