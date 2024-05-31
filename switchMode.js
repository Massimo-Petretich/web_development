let switchMode = () => {
    let doc =  document.documentElement
    let theme = doc.theme

    if ((! theme) || (theme === 'dark')) { 
        document.querySelector('body').classList.add('light-mode')
	doc.theme = 'light'
	//document.querySelector('#dark_light_mode_button').classList.add('hidden')
    }
    if (theme === 'light') { 
        document.querySelector('body').classList.remove('light-mode')
	doc.theme = 'dark'
	//document.querySelector('#dark_light_mode_button').classList.add('hidden')
    }
    console.log(`Theme set to ${doc.theme}`)
}