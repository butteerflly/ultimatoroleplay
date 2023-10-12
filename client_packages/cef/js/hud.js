var HUD = new Vue({
    el: ".player_hud",
    data: {
        show: true,
		showhelp: true,
		active: false,
		mic: false,
		id: 228,
        helpActive: false,
        bank: 2500,
        money: 231312,
        date: "22.10.2020",
        time: "22:10",
        online: 10,
        maxOnline: 1000,
		crossingRoad: "Вайнвуд",
		street: "Бульвар кольтров",
		vehs: true,
		poss: true,
		eats: true,
		biz: 'f',
        ammo: 0,
		// speedInfo
			isVeh: false,
            speed: 100,
            fuel: 39,
            isEngine: false,
            isDoors: false,
            isBelt: false,
			// statsMini: null
            water: 40,
            hunger: 29
        
		
    },
    methods: {
        
        showNotify(title, status2, text2) {
            
            $('.notify_list').append(`
            <div class="notify ${status2} animate__animated animate__fadeInUp">
                <div class="line"></div>
                <img src="./images/player_hud/noty_${status2}.png" alt="" class="icon">
                <div class="content">
                    <div class="title">${title}</div>
                    <div class="text">${text2}</div>
                </div>
            </div>`);
				var notify = $(' .notify_list .notify:last');
				setInterval(function () {
					notify.removeClass('animate__fadeInUp');

					notify.addClass('animate__fadeOutUp');
					setInterval(function () {
						notify.remove();
					}, 600)

				}, 6000);
        },
        
    }
});

