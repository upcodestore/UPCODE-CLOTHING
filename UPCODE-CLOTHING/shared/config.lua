Config = { }

Config.Open = {
    command = 'clothing',
    label = 'Open clothing menu',
    key = 'Y'
}

Config.HideMinimap = true

Config.MaxFov = 70.0

Config.MinFov = 30.0

Config.MaxHeight = 0.5

Config.Clothing = {
    mask = {
        default = 0,
        animation = { dict = 'mp_masks@standard_car@ds@', name = 'put_on_mask', move = 51, duration = 800 }
    },
    hat = {
        animation = { dict = 'clothingtie', name = 'check_out_a', move = 51, duration = 2000 }
    },
    glasses = {
        animation = { dict = 'clothingspecs', name = 'take_off', move = 51, duration = 1400 }
    },
    shirt = {
        default = 15,
        animation = { dict = 'missmic4', name = 'michael_tux_fidget', move = 51, duration = 1500 }
    },
    undershirt = {
        default = 15,
        animation = { dict = 'missmic4', name = 'michael_tux_fidget', move = 51, duration = 1500 }
    },
    vest = {
        default = 0,
        animation = { dict = 'clothingtie', name = 'try_tie_negative_a', move = 51, duration = 1200 }
    },
    chain = {
        default = 0,
        animation = { dict = 'clothingtie', name = 'try_tie_positive_a', move = 51, duration = 2100 }
    },
    watch = {
        animation = { dict = 'nmt_3_rcm-10', name = 'cs_nigel_dual-10', move = 51, duration = 1200 }
    },
    bracelet = {
        animation = { dict = 'nmt_3_rcm-10', name = 'cs_nigel_dual-10', move = 51, duration = 1200 }
    },
    pants = {
        default = 14,
        animation = { dict = 're@construction', name = 'out_of_breath', move = 51, duration = 1300 }
    },
    bag = {
        default = 0,
        animation = { dict = 'clothingtie', name = 'try_tie_negative_a', move = 51, duration = 1200 }
    },
    shoes = {
        default = 34,
        animation = { dict = 'random@domestic', name = 'pickup_low', move = 0, duration = 1200 }
    }
}

Config.Notification = function(text)
    SetNotificationTextEntry('STRING')
	AddTextComponentSubstringPlayerName(text)
	DrawNotification(false, true)
end