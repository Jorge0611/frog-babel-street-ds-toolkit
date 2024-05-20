/// <reference types="react" />
import * as _mui_material from '@mui/material';
import { ChipProps as ChipProps$1, AccordionProps as AccordionProps$1, TextFieldProps, AlertProps as AlertProps$1, IconButtonProps as IconButtonProps$1, CardProps as CardProps$3, BadgeProps as BadgeProps$1, AvatarProps as AvatarProps$1, BackdropProps as BackdropProps$1, BreadcrumbsProps, ButtonProps as ButtonProps$1, MenuProps as MenuProps$1, DividerProps as DividerProps$1, DrawerProps as DrawerProps$1, FabProps as FabProps$1, SvgIconProps, AutocompleteProps, CheckboxProps, FormGroupProps, FormLabelProps, InputLabelProps as InputLabelProps$1, RadioProps, RadioGroupProps, SliderProps, SliderValueLabelProps, SelectProps, SwitchProps, BoxProps, FormControlLabelProps, LinkProps as LinkProps$1, ListProps as ListProps$1, SxProps, Theme, DialogProps, PaginationProps as PaginationProps$1, CircularProgressProps, SkeletonProps as SkeletonProps$1, SnackbarProps as SnackbarProps$1, AlertColor, TableProps as TableProps$1, TabsProps as TabsProps$1, TabProps as TabProps$1, ToggleButtonProps as ToggleButtonProps$1, ToggleButtonGroupProps as ToggleButtonGroupProps$1, TooltipProps as TooltipProps$1, RatingProps as RatingProps$1, TypographyProps as TypographyProps$1 } from '@mui/material';
export { Box, BoxProps, Container, Stack, StackProps } from '@mui/material';
import * as React from 'react';
import React__default, { MouseEventHandler, ReactElement, ReactNode, MouseEvent } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dayjs } from 'dayjs';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import { DatePickerProps, DateTimePickerProps, DateRangePickerProps, TimePickerProps, DateRange } from '@mui/x-date-pickers-pro';
import { ChartDataset } from 'chart.js';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';
import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { LinearProgressProps } from '@mui/material/LinearProgress';

declare module "@mui/material/styles" {
    interface Theme {
        darkMode: Boolean;
        colors: {
            constant: {
                fillNotificationInfo: string;
                fillNotificationSuccess: string;
                fillNotificationWarning: string;
                fillNotificationError: string;
                fillNotificationTransparentInfo: string;
                fillNotificationTransparentSuccess: string;
                fillNotificationTransparentWarning: string;
                fillNotificationTransparentError: string;
                fillCtaPrimarySolidDefault: string;
                fillCtaPrimarySolidHover: string;
                fillCtaPrimarySolidPressed: string;
                fillCtaPrimaryTransparencyDefault: string;
                fillCtaPrimaryTransparencyFocus: string;
                fillCtaPrimaryTransparencyHover: string;
                fillCtaPrimaryTransparencySelected: string;
                fillCtaPrimaryTransparencyPressed: string;
                fillCtaSecondarySolidDefault: string;
                fillCtaSecondarySolidHover: string;
                fillCtaSecondarySolidPressed: string;
                fillCtaSecondaryTransparencyDefault: string;
                fillCtaSecondaryTransparencyFocus: string;
                fillCtaSecondaryTransparencyHover: string;
                fillCtaSecondaryTransparencySelected: string;
                fillCtaSecondaryTransparencyPressed: string;
                fillCtaDisabled: string;
                fillCtaCriticalSolidDefault: string;
                fillCtaCriticalSolidHover: string;
                fillCtaCriticalSolidPressed: string;
                fillSearchBarFieldBackgroundPopulated: string;
                fillSearchBarFieldBackground: string;
                fillMenu: string;
                fillDataVisBarGraph: string;
                fillDataVisSentimentVeryNegative: string;
                fillDataVisSentimentNegative: string;
                fillDataVisSentimentNeutral: string;
                fillDataVisSentimentPositive: string;
                fillDataVisSentimentVeryPositive: string;
                fillDataVisSequential_01: string;
                fillDataVisSequential_02: string;
                fillDataVisSequential_03: string;
                fillDataVisSequential_04: string;
                fillDataVisSequential_05: string;
                fillDataVisSequential_06: string;
                fillAvatarMagenta: string;
                fillAvatarRed: string;
                fillAvatarOrange: string;
                fillAvatarYellow: string;
                fillAvatarGreen: string;
                fillAvatarTeal: string;
                fillAvatarBlue: string;
                fillAvatarPurple: string;
                fillAvatarGrey: string;
                fillDataSourceIconsIconWhite: string;
                fillDataSourceIconsIconBlack: string;
                fillDataSourceIconsFacebook_01: string;
                fillDataSourceIconsTwitter_01: string;
                fillDataSourceIconsInstagram_01: string;
                fillDataSourceIconsLinkedin_01: string;
                fillDataSourceIconsReddit_01: string;
                fillDataSourceIconsGoogle_01: string;
                fillDataSourceIconsFlickr_01: string;
                fillDataSourceIconsFlickr_02: string;
                fillDataSourceIconsTumblr_01: string;
                fillDataSourceIconsYoutube_01: string;
                fillDataSourceIconsSnapchat_01: string;
                fillDataSourceIconsPinterest_01: string;
                fillDataSourceIconsVk_01: string;
                fillDataSourceIconsHi5_01: string;
                fillDataSourceIconsFoursquare_01: string;
                fillDataSourceIconsLastfm_01: string;
                fillDataSourceIconsHyves_01: string;
                fillDataSourceIconsEbay_01: string;
                fillDataSourceIconsEbay_02: string;
                fillDataSourceIconsEbay_03: string;
                fillDataSourceIconsEbay_04: string;
                fillDataSourceIconsOdnoklassniki_01: string;
                fillDataSourceIconsQuora_01: string;
                fillDataSourceIconsXanga_01: string;
                fillDataSourceIconsXanga_02: string;
                fillDataSourceIconsXanga_03: string;
                fillDataSourceIconsXanga_04: string;
                fillDataSourceIconsXanga_05: string;
                fillDataSourceIconsMylife_01: string;
                fillDataSourceIconsGaia_01: string;
                fillDataSourceIconsStumbleupon_01: string;
                fillDataSourceIconsBebo_01: string;
                fillDataSourceIconsLivejournal_01: string;
                fillDataSourceIconsLivejournal_02: string;
                fillDataSourceIconsViadeo_01: string;
                fillDataSourceIconsNing_01: string;
                fillDataSourceIconsMyheritage_01: string;
                fillDataSourceIconsQzone_01: string;
                fillDataSourceIconsFlixster_01: string;
                fillDataSourceIconsMyyearbook_01: string;
                fillDataSourceIconsMyyearbook_02: string;
                fillDataSourceIconsMyyearbook_03: string;
                fillDataSourceIconsMyyearbook_04: string;
                fillDataSourceIconsBadoo_01: string;
                fillDataSourceIconsBadoo_02: string;
                fillDataSourceIconsHabbo_01: string;
                fillDataSourceIconsHabbo_02: string;
                fillDataSourceIconsHabbo_03: string;
                fillDataSourceIconsXing_01: string;
                fillDataSourceIconsXing_02: string;
                fillDataSourceIconsSonico_01: string;
                fillDataSourceIconsSonico_02: string;
                fillDataSourceIconsFriendster_01: string;
                fillDataSourceIconsMeetup_01: string;
                fillDataSourceIconsGoodreads_01: string;
                fillDataSourceIconsClassmates_01: string;
                fillDataSourceIconsClassmates_02: string;
                fillDataSourceIconsClassmates_03: string;
                fillDataSourceIconsRenren_01: string;
                fillDataSourceIconsRenren_02: string;
                fillDataSourceIconsCyworld_01: string;
                fillDataSourceIconsNetlog_01: string;
                fillDataSourceIconsSoundcloud_01: string;
                fillDataSourceIconsYelp_01: string;
                fillDataSourceIconsOrkut_01: string;
                fillDataSourceIconsAboutme_01: string;
                fillDataSourceIconsFlavorsme_01: string;
                fillDataSourceIconsGravatar_01: string;
                fillDataSourceIconsImgur_01: string;
                fillDataSourceIconsFreelancer_01: string;
                fillDataSourceIconsFreelancer_02: string;
                fillDataSourceIconsFreelancer_03: string;
                fillDataSourceIconsMedium_01: string;
                fillDataSourceIconsStrava_01: string;
                fillDataSourceIconsStrava_02: string;
                fillDataSourceIconsDeviantart_01: string;
                fillDataSourceIconsDouban_01: string;
                fillDataSourceIconsDelicious_01: string;
                fillDataSourceIconsDelicious_02: string;
                fillTagRed: string;
                fillTagOrange: string;
                fillTagYellow: string;
                fillTagGreen: string;
                fillTagTeal: string;
                fillTagBlue: string;
                fillTagPurple: string;
                fillTagGrey: string;
                fillSwitchPrimaryKnobOff: string;
                fillSwitchPrimaryKnobOn: string;
                fillSwitchPrimaryTrackOff: string;
                fillSwitchPrimaryTrackOn: string;
                textBodyCommonHighEmphesis: string;
                textBodyCommonMediumEmphesis: string;
                textBodyCommonLowEmphesis: string;
                textBodyCommonDisabled: string;
                textBodyInverseHighEmphesis: string;
                textBodyInverseMediumEmphesis: string;
                textBodyInverseLowEmphesis: string;
                textBodyInverseDisabled: string;
                textLinksDefault: string;
                textLinksHover: string;
                textLinksPressed: string;
                textNotificationInfo: string;
                textNotificationSuccess: string;
                textNotificationWarning: string;
                textNotificationError: string;
                textCtaPrimaryDefault: string;
                textCtaSecondaryDefault: string;
                borderNotificationInfo: string;
                borderNotificationSuccess: string;
                borderNotificationWarning: string;
                borderNotificationError: string;
                borderPrimaryEnabled: string;
                borderPrimaryHover: string;
                borderPrimaryPressed: string;
                borderSecondaryEnabled: string;
                borderSecondaryHover: string;
                borderSecondaryPressed: string;
                borderDisabled: string;
                borderOutlineFieldsPopulated: string;
                borderOutlineFieldsEnabled: string;
                borderOutlineFieldsDisabled: string;
                borderOutlineFieldsFocused: string;
                borderDivider: string;
            };
            main: {
                fillNotificationInfo: string;
                fillNotificationSuccess: string;
                fillNotificationWarning: string;
                fillNotificationError: string;
                fillCtaPrimarySolidDefault: string;
                fillCtaPrimarySolidHover: string;
                fillCtaPrimarySolidPressed: string;
                fillCtaPrimaryTransparencyDefault: string;
                fillCtaPrimaryTransparencyFocus: string;
                fillCtaPrimaryTransparencyHover: string;
                fillCtaPrimaryTransparencySelected: string;
                fillCtaPrimaryTransparencyPressed: string;
                fillCtaSecondarySolidDefault: string;
                fillCtaSecondarySolidHover: string;
                fillCtaSecondarySolidPressed: string;
                fillCtaSecondaryTransparencyDefault: string;
                fillCtaSecondaryTransparencyFocus: string;
                fillCtaSecondaryTransparencyHover: string;
                fillCtaSecondaryTransparencySelected: string;
                fillCtaSecondaryTransparencyPressed: string;
                fillCtaDisabled: string;
                fillCardDefault: string;
                fillCardHover: string;
                fillCardFocus: string;
                fillCardSelected: string;
                fillCardPressed: string;
                fillDataVis_01: string;
                fillDataVis_02: string;
                fillDataVis_03: string;
                fillDataVis_04: string;
                fillDataVis_05: string;
                fillDataVis_06: string;
                fillDataVis_07: string;
                fillDataVis_08: string;
                fillMapsText: string;
                fillMapsLand: string;
                fillMapsWater: string;
                fillMapsRoads: string;
                fillSurfaceDefault: string;
                fillSurfaceOverlay: string;
                fillModuleBackground: string;
                fillMenu: string;
                fillHeaderBackground: string;
                fillNav: string;
                fillSwitchPrimaryKnobOff: string;
                fillSwitchPrimaryKnobOn: string;
                fillSwitchPrimaryTrackOff: string;
                fillSwitchPrimaryTrackOn: string;
                fillSwitchSecondaryKnobOff: string;
                fillSwitchSecondaryKnobOn: string;
                fillSwitchSecondaryTrackOff: string;
                fillSwitchSecondaryTrackOn: string;
                textBodyCommonHighEmphesis: string;
                textBodyCommonMediumEmphesis: string;
                textBodyCommonLowEmphesis: string;
                textBodyCommonDisabled: string;
                textBodyInverseHighEmphesis: string;
                textBodyInverseMediumEmphesis: string;
                textBodyInverseLowEmphesis: string;
                textBodyInverseDisabled: string;
                textLinksDefault: string;
                textLinksHover: string;
                textLinksPressed: string;
                textNotificationInfo: string;
                textNotificationSuccess: string;
                textNotificationWarning: string;
                textNotificationError: string;
                textHighlightingSearchCriteria: string;
                textHighlightingViolentIntent: string;
                textHighlightingRiskCategories: string;
                textCtaPrimaryDefault: string;
                textCtaSecondaryDefault: string;
                borderNotificationInfo: string;
                borderNotificationSuccess: string;
                borderNotificationWarning: string;
                borderNotificationError: string;
                borderPrimaryEnabled: string;
                borderPrimaryHover: string;
                borderPrimaryPressed: string;
                borderSecondaryEnabled: string;
                borderSecondaryHover: string;
                borderSecondaryPressed: string;
                borderDisabled: string;
                borderOutlineFieldsPopulated: string;
                borderOutlineFieldsEnabled: string;
                borderOutlineFieldsDisabled: string;
                borderOutlineFieldsFocused: string;
                borderDivider: string;
            };
            base: {
                greyWhite: string;
                grey_00: string;
                grey_01: string;
                grey_02: string;
                grey_03: string;
                grey_04: string;
                grey_05: string;
                grey_06: string;
                grey_07: string;
                grey_08: string;
                grey_08_5: string;
                grey_09: string;
                grey_09_5: string;
                grey_10: string;
                greyBlack: string;
                blue_0: string;
                blue_00: string;
                blue_01: string;
                blue_02: string;
                blue_03: string;
                blue_04: string;
                blue_05: string;
                blue_06: string;
                blue_07: string;
                blue_08: string;
                blue_09: string;
                blue_10: string;
                teal_0: string;
                teal_00: string;
                teal_01: string;
                teal_02: string;
                teal_03: string;
                teal_04: string;
                teal_05: string;
                teal_06: string;
                teal_07: string;
                teal_08: string;
                teal_09: string;
                teal_10: string;
                green_0: string;
                green_00: string;
                green_01: string;
                green_02: string;
                green_03: string;
                green_04: string;
                green_05: string;
                green_06: string;
                green_07: string;
                green_08: string;
                green_09: string;
                green_10: string;
                orange_0: string;
                orange_00: string;
                orange_01: string;
                orange_02: string;
                orange_03: string;
                orange_04: string;
                orange_05: string;
                orange_06: string;
                orange_07: string;
                orange_08: string;
                orange_09: string;
                orange_10: string;
                red_0: string;
                red_00: string;
                red_01: string;
                red_02: string;
                red_03: string;
                red_04: string;
                red_05: string;
                red_06: string;
                red_07: string;
                red_08: string;
                red_09: string;
                red_10: string;
                magenta_0: string;
                magenta_00: string;
                magenta_01: string;
                magenta_02: string;
                magenta_03: string;
                magenta_04: string;
                magenta_05: string;
                magenta_06: string;
                magenta_07: string;
                magenta_08: string;
                magenta_09: string;
                magenta_10: string;
                datavis_01: string;
                datavis_02: string;
                datavis_03: string;
                datavis_04: string;
                datavis_05: string;
                datavis_06: string;
                datavis_07: string;
                datavis_08: string;
                datavis_09: string;
                datavis_10: string;
                datavis_11: string;
                iconWhite: string;
                iconBlack: string;
                facebook_01: string;
                twitter_01: string;
                instagram_01: string;
                linkedin_01: string;
                reddit_01: string;
                tictok_01: string;
                tictok_02: string;
                tictok_03: string;
                google_01: string;
                flickr_01: string;
                flickr_02: string;
                tumblr_01: string;
                youtube_01: string;
                snapchat_01: string;
                pinterest_01: string;
                vk_01: string;
                hi5_01: string;
                foursquare_01: string;
                lastfm_01: string;
                hyves_01: string;
                delicious_01: string;
                delicious_02: string;
                deviantart_01: string;
                douban_01: string;
                odnoklassniki_01: string;
                quora_01: string;
                xanga_01: string;
                xanga_02: string;
                xanga_03: string;
                xanga_04: string;
                xanga_05: string;
                mylife_01: string;
                gaia_01: string;
                stumbleupon_01: string;
                bebo_01: string;
                livejournal_01: string;
                livejournal_02: string;
                viadeo_01: string;
                ning_01: string;
                myheritage_01: string;
                qzone_01: string;
                flixster_01: string;
                myyearbook_01: string;
                myyearbook_02: string;
                myyearbook_03: string;
                myyearbook_04: string;
                badoo_01: string;
                badoo_02: string;
                habbo_01: string;
                habbo_02: string;
                habbo_03: string;
                xing_01: string;
                xing_02: string;
                sonico_01: string;
                sonico_02: string;
                friendster_01: string;
                meetup_01: string;
                goodreads_01: string;
                classmates_01: string;
                classmates_02: string;
                classmates_03: string;
                renren_01: string;
                renren_02: string;
                cyworld_01: string;
                netlog_01: string;
                soundcloud_01: string;
                yelp_01: string;
                orkut_01: string;
                aboutme_01: string;
                flavorsme_01: string;
                freelancer_01: string;
                freelancer_02: string;
                freelancer_03: string;
                gravatar_01: string;
                imgur_01: string;
                medium_01: string;
                strava_01: string;
                strava_02: string;
                ebay_01: string;
                ebay_02: string;
                ebay_03: string;
                ebay_04: string;
                white_5Percent: string;
                white_8Percent: string;
                white_10Percent: string;
                white_15Percent: string;
                white_20Percent: string;
                white_35Percent: string;
                white_40Percent: string;
                white_45Percent: string;
                white_50Percent: string;
                white_75Percent: string;
                white_90Percent: string;
                white_95Percent: string;
                blue_5Percent: string;
                blue_8Percent: string;
                blue_10Percent: string;
                blue_15Percent: string;
                blue_20Percent: string;
                blue_25Percent: string;
                black_5Percent: string;
                black_8Percent: string;
                black_10Percent: string;
                black_15Percent: string;
                black_20Percent: string;
                black_35Percent: string;
                black_50Percent: string;
                black_75Percent: string;
                black_95Percent: string;
                blue0_25Percent: string;
                blue0_50Percent: string;
                green0_25Percent: string;
                green0_50Percent: string;
                orange0_25Percent: string;
                orange0_50Percent: string;
                red0_25Percent: string;
                red0_50Percent: string;
                lightGradient: string;
                blackGradient: string;
                graphGradient: string;
            };
        };
        effect: {
            elevationFabDefault: string;
            elevationFabFocused: string;
            elevationCardsDefault: string;
            elevationCardsSelected: string;
            elevationCardsDialog: string;
            elevationFixedElementsGlobalNav: string;
            elevationFixedElementsFilterResultsBar: string;
            elevationNotificationBannerNotification: string;
            elevationNotificationToastNotification: string;
            elevationNotificationTooltip: string;
            elevationRegular_01: string;
            elevationRegular_02: string;
            elevationRegular_03: string;
            elevationRegular_04: string;
            elevationReverse_01: string;
            elevationReverse_02: string;
            elevationReverse_03: string;
            elevationReverse_04: string;
        };
        radius: {
            cta: string;
            chips: string;
            checkbox: string;
            field: string;
            menu: string;
            card: string;
            notification: string;
            tag: string;
            base: {
                radius_2: string;
                radius_4: string;
                radius_8: string;
                radius_16: string;
                radius_24: string;
            };
        };
        grid: {
            gutterSm: string;
            outerGutterSm: string;
            gutterMd: string;
            outerGutterMd: string;
            gutterLg: string;
            outerGutterLg: string;
            gutterXl: string;
        };
        spacings: {
            xxxs: string;
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            base: {
                dimension_2: string;
                dimension_4: string;
                dimension_8: string;
                dimension_12: string;
                dimension_16: string;
                dimension_24: string;
                dimension_32: string;
                dimension_48: string;
            };
        };
    }
    interface ThemeOptions {
        darkMode?: Boolean;
        colors: {
            constant: {
                fillNotificationInfo: string;
                fillNotificationSuccess: string;
                fillNotificationWarning: string;
                fillNotificationError: string;
                fillNotificationTransparentInfo: string;
                fillNotificationTransparentSuccess: string;
                fillNotificationTransparentWarning: string;
                fillNotificationTransparentError: string;
                fillCtaPrimarySolidDefault: string;
                fillCtaPrimarySolidHover: string;
                fillCtaPrimarySolidPressed: string;
                fillCtaPrimaryTransparencyDefault: string;
                fillCtaPrimaryTransparencyFocus: string;
                fillCtaPrimaryTransparencyHover: string;
                fillCtaPrimaryTransparencySelected: string;
                fillCtaPrimaryTransparencyPressed: string;
                fillCtaSecondarySolidDefault: string;
                fillCtaSecondarySolidHover: string;
                fillCtaSecondarySolidPressed: string;
                fillCtaSecondaryTransparencyDefault: string;
                fillCtaSecondaryTransparencyFocus: string;
                fillCtaSecondaryTransparencyHover: string;
                fillCtaSecondaryTransparencySelected: string;
                fillCtaSecondaryTransparencyPressed: string;
                fillCtaDisabled: string;
                fillCtaCriticalSolidDefault: string;
                fillCtaCriticalSolidHover: string;
                fillCtaCriticalSolidPressed: string;
                fillSearchBarFieldBackgroundPopulated: string;
                fillSearchBarFieldBackground: string;
                fillMenu: string;
                fillDataVisBarGraph: string;
                fillDataVisSentimentVeryNegative: string;
                fillDataVisSentimentNegative: string;
                fillDataVisSentimentNeutral: string;
                fillDataVisSentimentPositive: string;
                fillDataVisSentimentVeryPositive: string;
                fillDataVisSequential_01: string;
                fillDataVisSequential_02: string;
                fillDataVisSequential_03: string;
                fillDataVisSequential_04: string;
                fillDataVisSequential_05: string;
                fillDataVisSequential_06: string;
                fillAvatarMagenta: string;
                fillAvatarRed: string;
                fillAvatarOrange: string;
                fillAvatarYellow: string;
                fillAvatarGreen: string;
                fillAvatarTeal: string;
                fillAvatarBlue: string;
                fillAvatarPurple: string;
                fillAvatarGrey: string;
                fillDataSourceIconsIconWhite: string;
                fillDataSourceIconsIconBlack: string;
                fillDataSourceIconsFacebook_01: string;
                fillDataSourceIconsTwitter_01: string;
                fillDataSourceIconsInstagram_01: string;
                fillDataSourceIconsLinkedin_01: string;
                fillDataSourceIconsReddit_01: string;
                fillDataSourceIconsGoogle_01: string;
                fillDataSourceIconsFlickr_01: string;
                fillDataSourceIconsFlickr_02: string;
                fillDataSourceIconsTumblr_01: string;
                fillDataSourceIconsYoutube_01: string;
                fillDataSourceIconsSnapchat_01: string;
                fillDataSourceIconsPinterest_01: string;
                fillDataSourceIconsVk_01: string;
                fillDataSourceIconsHi5_01: string;
                fillDataSourceIconsFoursquare_01: string;
                fillDataSourceIconsLastfm_01: string;
                fillDataSourceIconsHyves_01: string;
                fillDataSourceIconsEbay_01: string;
                fillDataSourceIconsEbay_02: string;
                fillDataSourceIconsEbay_03: string;
                fillDataSourceIconsEbay_04: string;
                fillDataSourceIconsOdnoklassniki_01: string;
                fillDataSourceIconsQuora_01: string;
                fillDataSourceIconsXanga_01: string;
                fillDataSourceIconsXanga_02: string;
                fillDataSourceIconsXanga_03: string;
                fillDataSourceIconsXanga_04: string;
                fillDataSourceIconsXanga_05: string;
                fillDataSourceIconsMylife_01: string;
                fillDataSourceIconsGaia_01: string;
                fillDataSourceIconsStumbleupon_01: string;
                fillDataSourceIconsBebo_01: string;
                fillDataSourceIconsLivejournal_01: string;
                fillDataSourceIconsLivejournal_02: string;
                fillDataSourceIconsViadeo_01: string;
                fillDataSourceIconsNing_01: string;
                fillDataSourceIconsMyheritage_01: string;
                fillDataSourceIconsQzone_01: string;
                fillDataSourceIconsFlixster_01: string;
                fillDataSourceIconsMyyearbook_01: string;
                fillDataSourceIconsMyyearbook_02: string;
                fillDataSourceIconsMyyearbook_03: string;
                fillDataSourceIconsMyyearbook_04: string;
                fillDataSourceIconsBadoo_01: string;
                fillDataSourceIconsBadoo_02: string;
                fillDataSourceIconsHabbo_01: string;
                fillDataSourceIconsHabbo_02: string;
                fillDataSourceIconsHabbo_03: string;
                fillDataSourceIconsXing_01: string;
                fillDataSourceIconsXing_02: string;
                fillDataSourceIconsSonico_01: string;
                fillDataSourceIconsSonico_02: string;
                fillDataSourceIconsFriendster_01: string;
                fillDataSourceIconsMeetup_01: string;
                fillDataSourceIconsGoodreads_01: string;
                fillDataSourceIconsClassmates_01: string;
                fillDataSourceIconsClassmates_02: string;
                fillDataSourceIconsClassmates_03: string;
                fillDataSourceIconsRenren_01: string;
                fillDataSourceIconsRenren_02: string;
                fillDataSourceIconsCyworld_01: string;
                fillDataSourceIconsNetlog_01: string;
                fillDataSourceIconsSoundcloud_01: string;
                fillDataSourceIconsYelp_01: string;
                fillDataSourceIconsOrkut_01: string;
                fillDataSourceIconsAboutme_01: string;
                fillDataSourceIconsFlavorsme_01: string;
                fillDataSourceIconsGravatar_01: string;
                fillDataSourceIconsImgur_01: string;
                fillDataSourceIconsFreelancer_01: string;
                fillDataSourceIconsFreelancer_02: string;
                fillDataSourceIconsFreelancer_03: string;
                fillDataSourceIconsMedium_01: string;
                fillDataSourceIconsStrava_01: string;
                fillDataSourceIconsStrava_02: string;
                fillDataSourceIconsDeviantart_01: string;
                fillDataSourceIconsDouban_01: string;
                fillDataSourceIconsDelicious_01: string;
                fillDataSourceIconsDelicious_02: string;
                fillTagRed: string;
                fillTagOrange: string;
                fillTagYellow: string;
                fillTagGreen: string;
                fillTagTeal: string;
                fillTagBlue: string;
                fillTagPurple: string;
                fillTagGrey: string;
                fillSwitchPrimaryKnobOff: string;
                fillSwitchPrimaryKnobOn: string;
                fillSwitchPrimaryTrackOff: string;
                fillSwitchPrimaryTrackOn: string;
                textBodyCommonHighEmphesis: string;
                textBodyCommonMediumEmphesis: string;
                textBodyCommonLowEmphesis: string;
                textBodyCommonDisabled: string;
                textBodyInverseHighEmphesis: string;
                textBodyInverseMediumEmphesis: string;
                textBodyInverseLowEmphesis: string;
                textBodyInverseDisabled: string;
                textLinksDefault: string;
                textLinksHover: string;
                textLinksPressed: string;
                textNotificationInfo: string;
                textNotificationSuccess: string;
                textNotificationWarning: string;
                textNotificationError: string;
                textCtaPrimaryDefault: string;
                textCtaSecondaryDefault: string;
                borderNotificationInfo: string;
                borderNotificationSuccess: string;
                borderNotificationWarning: string;
                borderNotificationError: string;
                borderPrimaryEnabled: string;
                borderPrimaryHover: string;
                borderPrimaryPressed: string;
                borderSecondaryEnabled: string;
                borderSecondaryHover: string;
                borderSecondaryPressed: string;
                borderDisabled: string;
                borderOutlineFieldsPopulated: string;
                borderOutlineFieldsEnabled: string;
                borderOutlineFieldsDisabled: string;
                borderOutlineFieldsFocused: string;
                borderDivider: string;
            };
            main: {
                fillNotificationInfo: string;
                fillNotificationSuccess: string;
                fillNotificationWarning: string;
                fillNotificationError: string;
                fillCtaPrimarySolidDefault: string;
                fillCtaPrimarySolidHover: string;
                fillCtaPrimarySolidPressed: string;
                fillCtaPrimaryTransparencyDefault: string;
                fillCtaPrimaryTransparencyFocus: string;
                fillCtaPrimaryTransparencyHover: string;
                fillCtaPrimaryTransparencySelected: string;
                fillCtaPrimaryTransparencyPressed: string;
                fillCtaSecondarySolidDefault: string;
                fillCtaSecondarySolidHover: string;
                fillCtaSecondarySolidPressed: string;
                fillCtaSecondaryTransparencyDefault: string;
                fillCtaSecondaryTransparencyFocus: string;
                fillCtaSecondaryTransparencyHover: string;
                fillCtaSecondaryTransparencySelected: string;
                fillCtaSecondaryTransparencyPressed: string;
                fillCtaDisabled: string;
                fillCardDefault: string;
                fillCardHover: string;
                fillCardFocus: string;
                fillCardSelected: string;
                fillCardPressed: string;
                fillDataVis_01: string;
                fillDataVis_02: string;
                fillDataVis_03: string;
                fillDataVis_04: string;
                fillDataVis_05: string;
                fillDataVis_06: string;
                fillDataVis_07: string;
                fillDataVis_08: string;
                fillMapsText: string;
                fillMapsLand: string;
                fillMapsWater: string;
                fillMapsRoads: string;
                fillSurfaceDefault: string;
                fillSurfaceOverlay: string;
                fillModuleBackground: string;
                fillMenu: string;
                fillHeaderBackground: string;
                fillNav: string;
                fillSwitchPrimaryKnobOff: string;
                fillSwitchPrimaryKnobOn: string;
                fillSwitchPrimaryTrackOff: string;
                fillSwitchPrimaryTrackOn: string;
                fillSwitchSecondaryKnobOff: string;
                fillSwitchSecondaryKnobOn: string;
                fillSwitchSecondaryTrackOff: string;
                fillSwitchSecondaryTrackOn: string;
                textBodyCommonHighEmphesis: string;
                textBodyCommonMediumEmphesis: string;
                textBodyCommonLowEmphesis: string;
                textBodyCommonDisabled: string;
                textBodyInverseHighEmphesis: string;
                textBodyInverseMediumEmphesis: string;
                textBodyInverseLowEmphesis: string;
                textBodyInverseDisabled: string;
                textLinksDefault: string;
                textLinksHover: string;
                textLinksPressed: string;
                textNotificationInfo: string;
                textNotificationSuccess: string;
                textNotificationWarning: string;
                textNotificationError: string;
                textHighlightingSearchCriteria: string;
                textHighlightingViolentIntent: string;
                textHighlightingRiskCategories: string;
                textCtaPrimaryDefault: string;
                textCtaSecondaryDefault: string;
                borderNotificationInfo: string;
                borderNotificationSuccess: string;
                borderNotificationWarning: string;
                borderNotificationError: string;
                borderPrimaryEnabled: string;
                borderPrimaryHover: string;
                borderPrimaryPressed: string;
                borderSecondaryEnabled: string;
                borderSecondaryHover: string;
                borderSecondaryPressed: string;
                borderDisabled: string;
                borderOutlineFieldsPopulated: string;
                borderOutlineFieldsEnabled: string;
                borderOutlineFieldsDisabled: string;
                borderOutlineFieldsFocused: string;
                borderDivider: string;
            };
            base: {
                greyWhite: string;
                grey_00: string;
                grey_01: string;
                grey_02: string;
                grey_03: string;
                grey_04: string;
                grey_05: string;
                grey_06: string;
                grey_07: string;
                grey_08: string;
                grey_08_5: string;
                grey_09: string;
                grey_09_5: string;
                grey_10: string;
                greyBlack: string;
                blue_0: string;
                blue_00: string;
                blue_01: string;
                blue_02: string;
                blue_03: string;
                blue_04: string;
                blue_05: string;
                blue_06: string;
                blue_07: string;
                blue_08: string;
                blue_09: string;
                blue_10: string;
                teal_0: string;
                teal_00: string;
                teal_01: string;
                teal_02: string;
                teal_03: string;
                teal_04: string;
                teal_05: string;
                teal_06: string;
                teal_07: string;
                teal_08: string;
                teal_09: string;
                teal_10: string;
                green_0: string;
                green_00: string;
                green_01: string;
                green_02: string;
                green_03: string;
                green_04: string;
                green_05: string;
                green_06: string;
                green_07: string;
                green_08: string;
                green_09: string;
                green_10: string;
                orange_0: string;
                orange_00: string;
                orange_01: string;
                orange_02: string;
                orange_03: string;
                orange_04: string;
                orange_05: string;
                orange_06: string;
                orange_07: string;
                orange_08: string;
                orange_09: string;
                orange_10: string;
                red_0: string;
                red_00: string;
                red_01: string;
                red_02: string;
                red_03: string;
                red_04: string;
                red_05: string;
                red_06: string;
                red_07: string;
                red_08: string;
                red_09: string;
                red_10: string;
                magenta_0: string;
                magenta_00: string;
                magenta_01: string;
                magenta_02: string;
                magenta_03: string;
                magenta_04: string;
                magenta_05: string;
                magenta_06: string;
                magenta_07: string;
                magenta_08: string;
                magenta_09: string;
                magenta_10: string;
                datavis_01: string;
                datavis_02: string;
                datavis_03: string;
                datavis_04: string;
                datavis_05: string;
                datavis_06: string;
                datavis_07: string;
                datavis_08: string;
                datavis_09: string;
                datavis_10: string;
                datavis_11: string;
                iconWhite: string;
                iconBlack: string;
                facebook_01: string;
                twitter_01: string;
                instagram_01: string;
                linkedin_01: string;
                reddit_01: string;
                tictok_01: string;
                tictok_02: string;
                tictok_03: string;
                google_01: string;
                flickr_01: string;
                flickr_02: string;
                tumblr_01: string;
                youtube_01: string;
                snapchat_01: string;
                pinterest_01: string;
                vk_01: string;
                hi5_01: string;
                foursquare_01: string;
                lastfm_01: string;
                hyves_01: string;
                delicious_01: string;
                delicious_02: string;
                deviantart_01: string;
                douban_01: string;
                odnoklassniki_01: string;
                quora_01: string;
                xanga_01: string;
                xanga_02: string;
                xanga_03: string;
                xanga_04: string;
                xanga_05: string;
                mylife_01: string;
                gaia_01: string;
                stumbleupon_01: string;
                bebo_01: string;
                livejournal_01: string;
                livejournal_02: string;
                viadeo_01: string;
                ning_01: string;
                myheritage_01: string;
                qzone_01: string;
                flixster_01: string;
                myyearbook_01: string;
                myyearbook_02: string;
                myyearbook_03: string;
                myyearbook_04: string;
                badoo_01: string;
                badoo_02: string;
                habbo_01: string;
                habbo_02: string;
                habbo_03: string;
                xing_01: string;
                xing_02: string;
                sonico_01: string;
                sonico_02: string;
                friendster_01: string;
                meetup_01: string;
                goodreads_01: string;
                classmates_01: string;
                classmates_02: string;
                classmates_03: string;
                renren_01: string;
                renren_02: string;
                cyworld_01: string;
                netlog_01: string;
                soundcloud_01: string;
                yelp_01: string;
                orkut_01: string;
                aboutme_01: string;
                flavorsme_01: string;
                freelancer_01: string;
                freelancer_02: string;
                freelancer_03: string;
                gravatar_01: string;
                imgur_01: string;
                medium_01: string;
                strava_01: string;
                strava_02: string;
                ebay_01: string;
                ebay_02: string;
                ebay_03: string;
                ebay_04: string;
                white_5Percent: string;
                white_8Percent: string;
                white_10Percent: string;
                white_15Percent: string;
                white_20Percent: string;
                white_35Percent: string;
                white_40Percent: string;
                white_45Percent: string;
                white_50Percent: string;
                white_75Percent: string;
                white_90Percent: string;
                white_95Percent: string;
                blue_5Percent: string;
                blue_8Percent: string;
                blue_10Percent: string;
                blue_15Percent: string;
                blue_20Percent: string;
                blue_25Percent: string;
                black_5Percent: string;
                black_8Percent: string;
                black_10Percent: string;
                black_15Percent: string;
                black_20Percent: string;
                black_35Percent: string;
                black_50Percent: string;
                black_75Percent: string;
                black_95Percent: string;
                blue0_25Percent: string;
                blue0_50Percent: string;
                green0_25Percent: string;
                green0_50Percent: string;
                orange0_25Percent: string;
                orange0_50Percent: string;
                red0_25Percent: string;
                red0_50Percent: string;
                lightGradient: string;
                blackGradient: string;
                graphGradient: string;
            };
        };
        effect: {
            elevationFabDefault: string;
            elevationFabFocused: string;
            elevationCardsDefault: string;
            elevationCardsSelected: string;
            elevationCardsDialog: string;
            elevationFixedElementsGlobalNav: string;
            elevationFixedElementsFilterResultsBar: string;
            elevationNotificationBannerNotification: string;
            elevationNotificationToastNotification: string;
            elevationNotificationTooltip: string;
            elevationRegular_01: string;
            elevationRegular_02: string;
            elevationRegular_03: string;
            elevationRegular_04: string;
            elevationReverse_01: string;
            elevationReverse_02: string;
            elevationReverse_03: string;
            elevationReverse_04: string;
        };
        radius: {
            cta: string;
            chips: string;
            checkbox: string;
            field: string;
            menu: string;
            card: string;
            notification: string;
            tag: string;
            base: {
                radius_2: string;
                radius_4: string;
                radius_8: string;
                radius_16: string;
                radius_24: string;
            };
        };
        grid: {
            gutterSm: string;
            outerGutterSm: string;
            gutterMd: string;
            outerGutterMd: string;
            gutterLg: string;
            outerGutterLg: string;
            gutterXl: string;
        };
        spacings: {
            xxxs: string;
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            base: {
                dimension_2: string;
                dimension_4: string;
                dimension_8: string;
                dimension_12: string;
                dimension_16: string;
                dimension_24: string;
                dimension_32: string;
                dimension_48: string;
            };
        };
    }
    interface TypographyVariants {
        body1_bold: React.CSSProperties;
        body1_textlink: React.CSSProperties;
        body1_italic: React.CSSProperties;
        body2_bold: React.CSSProperties;
        body2_textlink: React.CSSProperties;
        body2_italic: React.CSSProperties;
        eyebrow: React.CSSProperties;
        button_light: React.CSSProperties;
        button_bold: React.CSSProperties;
        label: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        body1_bold?: React.CSSProperties;
        body1_textlink?: React.CSSProperties;
        body1_italic?: React.CSSProperties;
        body2_bold?: React.CSSProperties;
        body2_textlink?: React.CSSProperties;
        body2_italic?: React.CSSProperties;
        eyebrow?: React.CSSProperties;
        button_light?: React.CSSProperties;
        button_bold?: React.CSSProperties;
        label?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        button: false;
        overline: false;
        body1_bold: true;
        body1_textlink: true;
        body1_italic: true;
        body2_bold: true;
        body2_textlink: true;
        body2_italic: true;
        eyebrow: true;
        button_light: true;
        button_bold: true;
        label: true;
    }
}
//# sourceMappingURL=muiModuleAugmentation.d.ts.map

declare const darkTheme: _mui_material.Theme;
declare const lightTheme: _mui_material.Theme;
//# sourceMappingURL=muiTokens.d.ts.map

interface ChipType {
    id: string | number;
    property?: string;
    value?: string;
    displayValue?: string;
    count?: number;
    searchType?: null | string;
    isEntity?: boolean;
    propertyDisplay?: string;
    userEntered?: boolean;
    preserveSelectedSearchTypeForPill?: boolean;
    showAllMenuOptions?: boolean;
}
type ChipBooleanSearchProps = ChipProps$1 & {
    maxCharCount?: number;
    readOnly?: boolean;
    isEntity?: boolean;
    chipId: string | number;
    property?: string;
    value?: string;
    displayValue?: string;
    disableRipple?: boolean;
    searchType: string | null;
    handleChipEditChange?: (newChipInfo: ChipType) => void;
    userEntered?: boolean;
    isDocSearch?: boolean;
    showAllMenuOptions?: boolean;
    pillTextMapping?: Record<string, string>;
};
declare const ChipBooleanSearch: React__default.MemoExoticComponent<(props: ChipBooleanSearchProps) => react_jsx_runtime.JSX.Element>;

type stateCodeType = {
    name: string;
    code: string;
};

type countryCodeType = {
    country: string;
    code: string;
};

type SearchProps = {
    withSelect?: boolean;
    hideScroll?: boolean;
    setSearchState: (value: ChipType[]) => void;
    onCategorySelectCallback?: (category: SearchCategoryType) => void;
    category?: "Documents" | "People" | "Business";
    searchState?: ChipType[];
    autoCompleteData?: ChipType[];
    hasUnsearchedCriteria?: boolean;
    executeSearchCallback: (searchState: SearchState | null) => void;
    startDate?: null | Dayjs;
    endDate?: null | Dayjs;
    timeZone?: TimeZoneProps;
    startDateCallback: (startDate: Dayjs | null) => void;
    endDateCallback: (endDate: Dayjs | null) => void;
    showBulkSearchSection?: boolean;
    QuotaComponent?: React__default.FunctionComponent;
    OutOfQuotaMessageComponent?: React__default.FunctionComponent;
    searchButtonIsDisabled?: boolean;
    onMultiLingualSmartSearchChange?: (value: boolean) => void;
    entitySearch?: boolean;
    isMenuOpen?: boolean;
    peopleValidationCallback?: (search: string) => Promise<ValidationError[]>;
    additionalSearchOptions?: AdditionalSearchOption[];
    hasPermission?: (permission?: IFeature) => boolean;
    debug?: boolean;
    searchTypeWarningCallback?: (searchTypeWarning: string) => void;
    propertyToTextMappings?: {
        autocompleteSectionTitleMapping: Record<string, string>;
        pillTextMapping: Record<string, string>;
    };
};
declare const searchCategoryOptions: SearchCategoryType[];
declare const Search: {
    (props: SearchProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type searchTypes = "exclude" | "includeAny" | "includeAll" | null;
type searchWithinTypes = "Document Text" | "Author Information" | "Mentioned URL" | "Document Source URL" | "Avengers" | "Star Wars" | "Locations" | "Famous Actors";
type searchWithinTypesShortened = "Doc Text" | "Author Info" | "Mentioned URL" | "Doc Source URL";
interface dropdownStateType {
    open?: boolean;
    showResults?: boolean;
    noOptions?: boolean;
}
interface searchOptionsType {
    searchTypeSelected?: searchTypes;
    entitySearch?: boolean;
    searchWithin?: searchWithinTypes | searchWithinTypesShortened;
    timeframe?: IDateRange;
}
interface peopleFormType {
    name?: string;
    username?: string;
    email?: string;
    countryCode?: countryCodeType | null;
    phone?: string;
    address?: string;
    recordId?: string;
    ssn?: string;
    npi?: string;
    dob?: string;
    vehicleStateCode?: stateCodeType;
    vin?: string;
    plateNumber?: string;
}
interface peopleFormValidationType {
    email?: {
        isValid: boolean;
        validationMessage: string;
    };
    phone?: {
        isValid: boolean;
        validationMessage: string;
    };
    address?: {
        isValid: boolean;
        validationMessage: string;
    };
    ssn?: {
        isValid: boolean;
        validationMessage: string;
    };
    npi?: {
        isValid: boolean;
        validationMessage: string;
    };
    dob?: {
        isValid: boolean;
        validationMessage: string;
    };
    vin?: {
        isValid: boolean;
        validationMessage: string;
    };
    plateNumber?: {
        isValid: boolean;
        validationMessage: string;
    };
    vehicleStateCode?: {
        isValid: boolean;
        validationMessage: string;
    };
}
type TimeZoneProps = {
    offset: number;
    code: string;
    city: string;
    zone: string;
};
interface ValidationError {
    message?: string;
    param?: string;
}
interface peopleSearchOptionsType {
    options: {
        [key: string]: boolean | undefined;
        credit?: boolean;
        criminal?: boolean;
        medical?: boolean;
        internationalPhone?: boolean;
        pep?: boolean;
        watchlist?: boolean;
        vehicleInfo?: boolean;
    };
    ssn?: string;
    npi?: string;
    dob?: string;
    vin?: string;
    plateNumber?: string;
    vehicleStateCode?: stateCodeType;
}
interface AdditionalSearchOption {
    id: string;
    label: string;
    glbaUseCaseValues?: InputSelectItem[];
    dppaUseCaseValues?: InputSelectItem[];
    selected?: boolean;
    selectedGlbaUseCaseValue?: InputSelectItem;
    selectedDppaUseCaseValue?: InputSelectItem;
    displayOrder?: number;
}
interface SearchState {
    chips: ChipType[];
    additionalSearchOptions?: AdditionalSearchOption[];
}
type IDateType = Date | Dayjs | string | null;
type IFeature = "omnisearchLocationDropdown";

type AccordionProps = AccordionProps$1 & {
    labelText: string;
    children: React.ReactNode;
    ariaControls?: string;
    accordionId?: string;
};
declare const Accordion: {
    (props: AccordionProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type InputTextareaProps = TextFieldProps & {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    readOnly?: boolean;
    border?: boolean;
    eyebrowLabel?: boolean;
    width?: string;
};
declare const InputTextarea: {
    (props: InputTextareaProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface AddCommentProps {
    inputTextProps?: InputTextareaProps;
    onCancel?: MouseEventHandler;
    onAdd?: MouseEventHandler;
}
declare function AddComment(props: AddCommentProps): react_jsx_runtime.JSX.Element;

type AlertProps = AlertProps$1 & {
    title?: string;
};
declare function Alert({ children, title, ...rest }: AlertProps): react_jsx_runtime.JSX.Element;
declare namespace Alert {
    var displayName: string;
}

type IconButtonProps = IconButtonProps$1 & {
    selected?: boolean;
    component?: string;
};
declare const IconButton: {
    (props: IconButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type DocumentState = "loading" | "loaded" | "threat";
interface FooterProps {
    documentState?: DocumentState;
    newComments?: boolean;
    bookmarked?: boolean;
    messageAction?: React__default.MouseEventHandler<HTMLElement>;
    bookmarkAction?: React__default.MouseEventHandler<HTMLElement>;
    active?: boolean;
}

type DisplayType = "stacked" | "static";
type GeneralProps = CardProps$3 & {
    display: DisplayType;
    title: string;
    avatarImgSrc?: string;
    avatarImgAlt?: string;
    hovered?: boolean;
    active?: boolean;
    onClick?: React__default.MouseEventHandler<HTMLElement>;
    href?: string;
};
type InternalNotificationsProps = FooterProps;

type variantType = "solid" | "outline" | "color";
type colorStyleType = "primary" | "secondary" | "card";
interface TagGroup {
    label: string;
    tags: TagProps[];
}
interface TagProps {
    variant: variantType;
    colorStyle?: colorStyleType;
    text: string;
    color?: string;
    removeCallback?: () => void;
}
declare function Tag(props: TagProps): react_jsx_runtime.JSX.Element;
declare namespace Tag {
    var displayName: string;
}

type ArticleSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    onClose?: MouseEventHandler;
    source: string;
    noAvatar?: boolean;
    sourceImgSrc?: string;
    sourceImgAlt: string;
    language: string;
    dateOrTimePassed: Date | string;
    tagGroups: TagGroup[];
};
declare function ArticleSearchResultCard(props: ArticleSearchResultCardProps): react_jsx_runtime.JSX.Element;

type BadgeProps = BadgeProps$1 & {
    children?: React.ReactNode;
    badgeContent?: number | string | React.ReactNode;
    dotColor?: string;
    dotFontColor?: string;
};
declare function Badge(props: BadgeProps): react_jsx_runtime.JSX.Element;
declare namespace Badge {
    var displayName: string;
}

type AvatarProps = AvatarProps$1 & {
    size?: "small" | "medium" | "large";
    name?: string;
    group?: {
        name: string;
        img: string;
        userOnline: boolean;
    }[];
    groupMax?: number;
    userOnline?: boolean;
    role?: string;
    height?: string | number;
    width?: string | number;
};
declare function Avatar(props: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace Avatar {
    var displayName: string;
}

type BackdropProps = BackdropProps$1;
declare function Backdrop(props: BackdropProps): react_jsx_runtime.JSX.Element;
declare namespace Backdrop {
    var displayName: string;
}

type BarDataset = Pick<ChartDataset<"bar">, "data" | "label" | "order">;
type BarChartData = {
    index: number;
    label: string;
    value: number;
};
type BarChartProps = {
    labels: string[];
    datasets: BarDataset[];
    variant?: "docOverview";
    onClick?: (data: BarChartData) => void;
};
declare function BarChart(props: BarChartProps): react_jsx_runtime.JSX.Element;
declare namespace BarChart {
    var displayName: string;
}

type BreadcrumbProps = BreadcrumbsProps & {
    children: React.ReactNode;
};
declare function Breadcrumb(props: BreadcrumbProps): react_jsx_runtime.JSX.Element;
declare namespace Breadcrumb {
    var displayName: string;
}

type HeaderTagProps = Pick<TagProps, "color" | "text"> & {
    category?: number;
};

type BusinessSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    checked?: boolean;
    onCheckChange?: SwitchBaseProps["onChange"];
    tagProps?: HeaderTagProps[];
    address?: string;
    industry?: string;
    companySize?: number | string;
    revenue?: number | string;
};
declare function BusinessSearchResultCard(props: BusinessSearchResultCardProps): react_jsx_runtime.JSX.Element;

type ButtonProps = ButtonProps$1;
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        ghost: true;
        inactive: true;
        active: true;
        complete: true;
        failure: true;
    }
}
declare const Button: {
    (props: ButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CardCarouselProps {
    cards: ReactElement[];
    cardsPerPage: number;
    carouselHeight?: number;
}
declare function CardCarousel(props: CardCarouselProps): react_jsx_runtime.JSX.Element;

type ReportCardProps = CardProps$3 & {
    title?: string;
    noAvatar?: boolean;
    avatarImgs: string[];
    reportDate: Date | string;
    reportType: string;
    format?: string;
    cardMenu?: React__default.ReactNode | React__default.ReactNode[];
    href?: string;
    id: number;
};
declare function ReportCard(props: ReportCardProps): react_jsx_runtime.JSX.Element;
declare namespace ReportCard {
    var displayName: string;
}

type CardProps$2 = CardProps$3 & {};
declare function ShareCard(props: CardProps$2): react_jsx_runtime.JSX.Element;
declare namespace ShareCard {
    var displayName: string;
}

declare enum SnapshotCardVariant {
    image = "image",
    bigWord = "bigword",
    smallWord = "smallword"
}
type CardProps$1 = CardProps$3 & {
    cardMenu?: React.ReactNode | React.ReactNode[];
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    cardVariant: SnapshotCardVariant;
    text?: string;
    cardImage?: string;
    cardAltText?: string;
    commentIconOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
    bookmarkIconOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
declare function SnapshotCard(props: CardProps$1): react_jsx_runtime.JSX.Element;
declare namespace SnapshotCard {
    var displayName: string;
}

interface CardContent$1 {
    number: number | string;
    contentText: string;
}
type CardProps = CardProps$3 & {
    cardMenu?: React.ReactNode | React.ReactNode[];
    title: string;
    subTitle: string;
    cardContent?: CardContent$1[];
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    target?: string;
    id: number;
};
declare function HomepageProjectCard(props: CardProps): react_jsx_runtime.JSX.Element;
declare namespace HomepageProjectCard {
    var displayName: string;
}

interface ChipsCardContent {
    isEntity: boolean;
    chipId: number | string;
    property: string;
    value: string;
    displayValue: string;
    searchType: string;
}
interface CardContent {
    number: number | string;
    contentText: string;
}
type DeepSearchStatusType = "inprogress" | "completed";
type cardOrientationType = "horizontal" | "vertical";
type QueryCardProps = CardProps$3 & {
    cardOrientation: cardOrientationType;
    deepSearchStatus?: DeepSearchStatusType;
    searchCategory: string;
    cardMenu?: React.ReactNode | React.ReactNode[];
    title: string;
    firstConductedDate: Date;
    inProgressUntilDate?: Date;
    lastUpdateTimeAgo?: string;
    cardContent?: CardContent[];
    chipsContent?: ChipsCardContent[];
    truncateTitle?: number;
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    cardContentInfo?: React.ReactElement;
};
declare function QueryCard(props: QueryCardProps): react_jsx_runtime.JSX.Element;
declare namespace QueryCard {
    var displayName: string;
}

type CardMenuProps = MenuProps$1 & {
    children: React.ReactNode;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
};
declare function CardMenu(props: CardMenuProps): react_jsx_runtime.JSX.Element;
declare namespace CardMenu {
    var displayName: string;
}

type ChipProps = ChipProps$1 & {
    labelText: React.ReactNode;
    count?: number;
    selected?: boolean;
    disableRipple?: boolean;
    useConstantTheme?: boolean;
};
declare const Chip: {
    (props: ChipProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CommentPanelProps extends Omit<AccordionProps, "children"> {
    notValid?: boolean;
    invalidScreen?: ReactNode;
    legend?: string;
    comments?: ReactNode[];
    addCommentForm?: ReactNode;
}
declare function CommentPanel(props: CommentPanelProps): react_jsx_runtime.JSX.Element;

interface DataTableProps {
    children?: React.ReactNode;
}
declare function DataTable(props: DataTableProps): react_jsx_runtime.JSX.Element;
declare namespace DataTable {
    var displayName: string;
}

type DividerProps = DividerProps$1 & {
    type?: string;
};
declare function Divider(props: DividerProps): react_jsx_runtime.JSX.Element;
declare namespace Divider {
    var displayName: string;
}

interface DonutChartCallbackType {
    text: string;
    value: number;
}
interface aggType {
    id: string;
    name?: string;
    count: number;
}
type DonutDataSet = {
    data: number[];
};
type DonutChartProps = DonutDataSet & {
    labels: string[];
    sentiment?: boolean;
    onClick: (obj: aggType | DonutChartCallbackType) => void;
    aggsArr?: aggType[];
};
declare function DonutChart(props: DonutChartProps): react_jsx_runtime.JSX.Element;
declare namespace DonutChart {
    var displayName: string;
}

type DrawerProps = DrawerProps$1 & {};
declare function Drawer(props: DrawerProps): react_jsx_runtime.JSX.Element;
declare namespace Drawer {
    var displayName: string;
}

type FabProps = FabProps$1 & {
    outlined?: boolean;
    fabText?: string;
    noIcon?: boolean;
};
declare const Fab: {
    (props: FabProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type CheckSolidIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CheckSolidIcon(props: CheckSolidIconProps): react_jsx_runtime.JSX.Element;
declare namespace CheckSolidIcon {
    var displayName: string;
}

type IconExampleProps = CheckSolidIconProps;

declare function IconExample(props: CheckSolidIconProps): react_jsx_runtime.JSX.Element;
declare namespace IconExample {
    var displayName: string;
}

interface ImageZoomAndPanProps {
    src: string;
}
declare function ImageZoomAndPan({ src }: ImageZoomAndPanProps): react_jsx_runtime.JSX.Element;

interface InputAutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
}
declare function InputAutocomplete<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined>(props: InputAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): react_jsx_runtime.JSX.Element;
declare namespace InputAutocomplete {
    var displayName: string;
}

type InputCheckboxProps = CheckboxProps;
declare function InputCheckbox(props: InputCheckboxProps): react_jsx_runtime.JSX.Element;
declare namespace InputCheckbox {
    var displayName: string;
}

type InputCheckboxGroupProps = FormGroupProps & {
    error?: boolean;
    errorMsg?: string;
    compact?: boolean;
};
declare function InputCheckboxGroup(props: InputCheckboxGroupProps): react_jsx_runtime.JSX.Element;
declare namespace InputCheckboxGroup {
    var defaultProps: {
        compact: boolean;
    };
    var displayName: string;
}

interface InputDatepickerProps<TInputDate, TDate> extends DatePickerProps<TInputDate, TDate> {
    size?: string;
    variant?: any;
    error?: boolean;
    errorMsg: string;
    helperText?: string;
    eyebrowLabel?: boolean;
}
declare function InputDatepicker<TInputDate, TDate>(props: InputDatepickerProps<TInputDate, TDate>): react_jsx_runtime.JSX.Element;
declare namespace InputDatepicker {
    var displayName: string;
}

interface InputDateTimePickerProps<TInputDate, TDate> extends Omit<DateTimePickerProps<TInputDate, TDate>, "renderInput"> {
    variant?: string;
    error?: boolean;
    errorMsg: string;
    helperText?: string;
    eyebrowLabel?: boolean;
    size?: string;
    timeZone?: TimeZoneProps;
}
declare function InputDateTimePicker<TInputDate, TDate>(props: InputDateTimePickerProps<TInputDate, TDate>): react_jsx_runtime.JSX.Element;
declare namespace InputDateTimePicker {
    var displayName: string;
}

interface InputDateRangePickerProps<TDayjs> extends Omit<DateRangePickerProps<Dayjs | null, Dayjs | null>, "renderInput"> {
    variant?: string;
    error?: boolean;
    errorMsg?: string;
    helperText?: string;
    timeZone?: TimeZoneProps;
    stacked?: boolean;
    startDateCallback: (date: Dayjs | null) => void;
    endDateCallback: (date: Dayjs | null) => void;
}
declare function InputDateRangePicker<TDayjs>(props: InputDateRangePickerProps<TDayjs>): react_jsx_runtime.JSX.Element;
declare namespace InputDateRangePicker {
    var displayName: string;
}

type InputGroupLabelProps = FormLabelProps;
declare function InputGroupLabel(props: InputGroupLabelProps): react_jsx_runtime.JSX.Element;
declare namespace InputGroupLabel {
    var displayName: string;
}

type InputLabelProps = InputLabelProps$1 & {
    disableAnimation?: boolean;
};
declare function InputLabel(props: InputLabelProps): react_jsx_runtime.JSX.Element;
declare namespace InputLabel {
    var displayName: string;
}

type InputTextProps = TextFieldProps & {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    readOnly?: boolean;
    noHelperText?: boolean;
    eyebrowLabel?: boolean;
    border?: boolean;
    errorMsg?: string;
};
declare const InputText: {
    (props: InputTextProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type InputModalProps = InputTextProps & {
    component?: "input" | "textarea";
    characterLimit?: number;
};
declare function InputModal({ id, label, defaultValue, placeholder, helperText, component, children, characterLimit, ...props }: InputModalProps): react_jsx_runtime.JSX.Element;
declare namespace InputModal {
    var defaultProps: {
        helperText: string;
    };
}

type InputRadioButtonProps = RadioProps;
declare function InputRadioButton(props: InputRadioButtonProps): react_jsx_runtime.JSX.Element;
declare namespace InputRadioButton {
    var displayName: string;
}

type InputRadioButtonGroupProps = RadioGroupProps & {
    error?: boolean;
    errorMsg?: string;
    compact?: boolean;
};
declare function InputRadioButtonGroup(props: InputRadioButtonGroupProps): react_jsx_runtime.JSX.Element;
declare namespace InputRadioButtonGroup {
    var defaultProps: {
        compact: boolean;
    };
    var displayName: string;
}

type InputRangeSliderProps = SliderProps & SliderValueLabelProps & {
    leftSliderIcon?: React.ReactNode;
    rightSliderIcon?: React.ReactNode;
};
declare function Slider(props: InputRangeSliderProps): react_jsx_runtime.JSX.Element;
declare namespace Slider {
    var displayName: string;
}

type InputSearchProps = TextFieldProps & {
    onClickSearchButton?: (event: MouseEvent) => void;
};
declare function InputSearch(props: InputSearchProps): react_jsx_runtime.JSX.Element;
declare namespace InputSearch {
    var displayName: string;
}

type InputSelectItem = {
    id: string;
    name: string;
    eyebrowText?: string;
};
type InputSelectProps = SelectProps & {
    helperText?: string;
    errorMsg?: string;
    label?: string;
    variant?: string;
    startIcon?: JSX.Element;
    eyebrowLabel?: boolean;
    border?: boolean;
    valuesList?: string[] | InputSelectItem[];
    placeholder?: string;
    itemOnClick?: (selection: string | InputSelectItem) => void;
    hideBackdrop?: boolean;
    fullLengthItems?: boolean;
};
declare function InputSelect(props: InputSelectProps): react_jsx_runtime.JSX.Element;
declare namespace InputSelect {
    var displayName: string;
}

type InputSwitchProps = SwitchProps & {
    children?: React.ReactNode;
    ariaLabel?: string;
    type?: string;
};
declare function InputSwitch(props: InputSwitchProps): react_jsx_runtime.JSX.Element;
declare namespace InputSwitch {
    var displayName: string;
}

interface InputTimePickerProps<TInputDate, TDate> extends TimePickerProps<TInputDate, TDate> {
    variant?: any;
    error?: boolean;
    errorMsg?: string;
    helperText?: string;
    eyebrowLabel?: boolean;
    size?: string;
}
declare function InputTimePicker<TInputDate, TDate>(props: InputTimePickerProps<TInputDate, TDate>): react_jsx_runtime.JSX.Element;
declare namespace InputTimePicker {
    var displayName: string;
}

type JumpMenuItems = {
    label?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
};
type JumpMenuProps = BoxProps & {
    attachment?: "left" | "right";
    items?: Array<JumpMenuItems>;
};
declare function JumpMenu(props: JumpMenuProps): react_jsx_runtime.JSX.Element;
declare namespace JumpMenu {
    var defaultProps: {
        attachment: string;
    };
    var displayName: string;
}

type LabelProps = FormControlLabelProps;
declare function Label(props: LabelProps): react_jsx_runtime.JSX.Element;
declare namespace Label {
    var displayName: string;
}

type LineDataset = Pick<ChartDataset<"line">, "data" | "label" | "order">;
interface LineChartProps {
    title?: string;
    yAxisUnit?: string;
    xAxisUnit?: string;
    labels: string[];
    datasets: LineDataset[];
}
declare function LineChart(props: LineChartProps): react_jsx_runtime.JSX.Element;
declare namespace LineChart {
    var displayName: string;
}

type LinkProps = LinkProps$1 & {
    children?: React.ReactNode;
    type?: string;
};
declare function Link(props: LinkProps): react_jsx_runtime.JSX.Element;
declare namespace Link {
    var displayName: string;
}

type ListProps = ListProps$1 & {
    children?: React.ReactNode;
    listItems?: RenderItemProps[];
    label?: string;
    withDividers?: boolean;
    selectedItem?: number;
    checkboxList?: boolean;
    variant?: "default" | "collapse" | "photos";
    isOpen?: boolean;
    disableSticky?: boolean;
};
type RenderItemProps = ListItemButtonProps & ItemProps;
type ItemProps = {
    text: string;
    onClick?: () => void;
    Icon?: any;
    iconColor?: string;
    withDividers?: boolean;
    selected: boolean;
    setSelected: Function;
    index: number;
    checkboxList?: boolean;
    disabled?: boolean;
    image?: string;
};
declare function List(props: ListProps): react_jsx_runtime.JSX.Element;
declare namespace List {
    var displayName: string;
}

type CollapsibleListItemProps = {
    title?: React__default.ReactNode;
    titleIcon?: React__default.ReactNode;
    itemType?: string;
    itemMeta?: string;
};
type CollapsibleListProps = {
    children?: React__default.ReactNode;
    listItems?: CollapsibleListItemProps[];
    label?: string;
    isCollapsible?: boolean;
    variant?: any;
    sx?: SxProps<Theme> | undefined;
};
declare function CollapsibleList(props: CollapsibleListProps): react_jsx_runtime.JSX.Element;
declare namespace CollapsibleList {
    var displayName: string;
}

type StaticListItemProps = {
    title?: React__default.ReactNode;
    titleIcon?: React__default.ReactNode;
    itemType?: string;
    itemMeta?: string;
    children?: React__default.ReactNode;
};
type StaticListProps = {
    children?: React__default.ReactNode;
    listItems?: StaticListItemProps[];
    label?: string;
    sx?: SxProps<Theme> | undefined;
    stickyHeaders?: boolean;
};
declare function StaticList(props: StaticListProps): react_jsx_runtime.JSX.Element;
declare namespace StaticList {
    var displayName: string;
}

type ModalHeaderProps = {
    onClose?: () => void;
    modalTitle?: string;
    titleLabel?: string;
    titleIcon?: React__default.ReactNode;
};

type ModalContentProps = {
    modalText?: React__default.ReactNode;
    children?: React__default.ReactNode;
};

type ModalActionsProps = {
    onClose: () => void;
    confirmBtnText?: string | React__default.ReactNode;
    cancelBtnText?: string;
    handleConfirm?: () => void;
    confirmHref?: string;
    handleCancel?: () => void;
    fullWidthControls?: boolean;
    hideCancelBtn?: boolean;
    hideBtns?: boolean;
    confirmBtnStartIcon?: JSX.Element;
    confirmBtnDisabled?: boolean;
    isDestructive?: boolean;
};

type ModalProps = DialogProps & ModalHeaderProps & ModalActionsProps & ModalContentProps & {
    children?: React.ReactNode;
    title?: string;
    titleIcon?: React.ReactNode;
    open: boolean;
    titleLabel?: string;
    onClose: () => void;
};
declare function Modal(props: ModalProps): react_jsx_runtime.JSX.Element;
declare namespace Modal {
    var displayName: string;
}

type CustomMenuProps = {
    toggleElem: React.ReactNode;
    dense?: boolean;
    displayAsNav?: boolean;
    menuMaxHeight?: number;
    menuWidth?: number | string;
    withAccessQuota?: boolean;
    withDividers?: boolean;
};
type MenuItemObject = Pick<MenuProps$1, "anchorOrigin" | "transformOrigin"> & Omit<CustomMenuProps, "toggleElem" | "displayAsNav"> & {
    title: string | React.ReactFragment;
    divider?: boolean;
    topDivider?: boolean;
    header?: boolean;
    footer?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    subtitle?: string;
    unread?: boolean;
    menuItems?: MenuItemObject[];
    listItems?: MenuItemObject[];
    progressIndicator?: React.ReactNode & {
        props: ProgressProps;
    };
};
type MenuProps = Omit<MenuProps$1, "open"> & {
    menuItems: MenuItemObject[];
    displayAsNav?: boolean;
    withDividers?: boolean;
    withAccessQuota?: boolean;
};
type MenuContainerProps = MenuProps & CustomMenuProps;
declare function Menu(props: MenuContainerProps): react_jsx_runtime.JSX.Element;
declare namespace Menu {
    var displayName: string;
}

type PaginationProps = PaginationProps$1 & {};
declare function Pagination(props: PaginationProps): react_jsx_runtime.JSX.Element;
declare namespace Pagination {
    var displayName: string;
}

type PersonSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    condensed?: boolean;
    onClose?: React__default.MouseEventHandler;
    threatLevel: ThreatLevel;
    tagProps?: HeaderTagProps[];
    showTagsOnCondensed?: boolean;
    address?: string;
    gender?: string;
    usernames?: string;
    job?: string;
    language: string;
    dateOrTimePassed: Date | string;
    confidenceScore?: string;
    confidenceScoreColor?: string;
    offenseCount?: number;
    creditRecordsCount?: number;
    country?: string;
    npiNumber?: string;
    vehicleCount?: number;
    age?: string;
    watchlist?: string;
    region?: string;
    nationality?: string;
    caseType?: string;
};
type ThreatLevel = "low" | "medium" | "high";
declare function ThreatLevel(props: {
    threatLevel: ThreatLevel;
}): react_jsx_runtime.JSX.Element;
declare function PersonSearchResultCard(props: PersonSearchResultCardProps): react_jsx_runtime.JSX.Element;

type PostSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    checked?: boolean;
    onCheckChange?: SwitchBaseProps["onChange"];
    tagProps?: HeaderTagProps[];
    articleImgSrc: string;
    source: string;
    language: string;
    dateOrTimePassed: Date | string;
};
declare function PostSearchResultCard(props: PostSearchResultCardProps): react_jsx_runtime.JSX.Element;

type ProgressProps = LinearProgressProps & CircularProgressProps & {
    isLinear?: boolean;
};
declare function Progress(props: ProgressProps): react_jsx_runtime.JSX.Element;
declare namespace Progress {
    var displayName: string;
}

type PulseProps = {
    children?: React.ReactNode;
    isPulsing: boolean;
    variant?: "default" | "error" | "light" | "dark";
};
declare function Pulse(props: PulseProps): react_jsx_runtime.JSX.Element;
declare namespace Pulse {
    var displayName: string;
}

interface CommentData {
    author: string;
    creationDate: Date;
    updateDate?: Date;
    content: string;
    editable?: boolean;
}
interface SingleCommentProps extends CommentData {
    onDelete?: MouseEventHandler;
    onUpdate?: MouseEventHandler;
    inputTextProps?: InputTextareaProps;
}
declare function SingleComment(props: SingleCommentProps): react_jsx_runtime.JSX.Element;

type SkeletonProps = SkeletonProps$1;
declare const Skeleton: {
    (props: SkeletonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type SnackbarSeverity = AlertColor;
type SnackbarCtaProps = Omit<ButtonProps, "variant" | "size" | "color">;
type SnackbarProps = Omit<SnackbarProps$1, "action"> & {
    severity: SnackbarSeverity;
    ctaProps?: SnackbarCtaProps;
};
declare function Snackbar(props: SnackbarProps): react_jsx_runtime.JSX.Element;
declare namespace Snackbar {
    var displayName: string;
}

type TablePropsType = {
    tableHeadCols?: String[];
    tableData?: any[];
};
type TableProps = TableProps$1 & TablePropsType;
declare function Table(props: TableProps): react_jsx_runtime.JSX.Element;
declare namespace Table {
    var displayName: string;
}

type TableSortableProps = TableProps$1 & {
    headCells: any[];
    rowData: any[];
    rowClickHandler?: (clickedIndex: number, selectedIndexes: readonly string[]) => void;
    rowsPerPageOptions: number[];
    variant?: "Styled1";
    withCheckboxes: boolean;
};
declare function TableSortable(props: TableSortableProps): react_jsx_runtime.JSX.Element;
declare namespace TableSortable {
    var displayName: string;
}

type TabsProps = TabsProps$1 & {
    ariaLabel?: string;
    navigation?: boolean;
    fullHeight?: boolean;
    tabsId: string;
    tabProps: TabProps[];
};
type TabProps = TabProps$1 & {
    name?: string;
    hoverText?: string;
    disabledText?: string;
    sx?: SxProps<Theme> | undefined;
};
declare function Tabs(props: TabsProps): react_jsx_runtime.JSX.Element;
declare namespace Tabs {
    var defaultProps: {
        navigation: boolean;
        fullHeight: boolean;
    };
    var displayName: string;
}

type ToggleButtonProps = ToggleButtonProps$1;
declare function ToggleButton(props: ToggleButtonProps): react_jsx_runtime.JSX.Element;
declare namespace ToggleButton {
    var displayName: string;
}

type ToggleButtonGroupProps = ToggleButtonGroupProps$1 & {
    variant?: "default" | "searchBar";
};

declare function ToggleButtonGroup(props: ToggleButtonGroupProps): react_jsx_runtime.JSX.Element;
declare namespace ToggleButtonGroup {
    var displayName: string;
}

type TooltipProps = TooltipProps$1 & {
    ariaLabel?: string;
    type?: string;
    variant?: string;
};
declare function Tooltip(props: TooltipProps): react_jsx_runtime.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}

type WordCloudProps = {
    words: Array<{
        word: string;
        value?: number;
    }>;
};
declare function WordCloud(props: WordCloudProps): react_jsx_runtime.JSX.Element;
declare namespace WordCloud {
    var displayName: string;
}

type AddIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function AddIcon(props: AddIconProps): react_jsx_runtime.JSX.Element;
declare namespace AddIcon {
    var displayName: string;
}

type AddFilterIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function AddFilterIcon(props: AddFilterIconProps): react_jsx_runtime.JSX.Element;
declare namespace AddFilterIcon {
    var displayName: string;
}

type AppsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function AppsIcon(props: AppsIconProps): react_jsx_runtime.JSX.Element;
declare namespace AppsIcon {
    var displayName: string;
}

type AreaZoomIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function AreaZoomIcon(props: AreaZoomIconProps): react_jsx_runtime.JSX.Element;
declare namespace AreaZoomIcon {
    var displayName: string;
}

type ArrowChevronCloseDownIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowChevronCloseDownIcon(props: ArrowChevronCloseDownIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowChevronCloseDownIcon {
    var displayName: string;
}

type ArrowChevronCloseDownSortIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowChevronCloseDownSortIcon(props: ArrowChevronCloseDownSortIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowChevronCloseDownSortIcon {
    var displayName: string;
}

type ArrowChevronCloseLeftIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowChevronCloseLeftIcon(props: ArrowChevronCloseLeftIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowChevronCloseLeftIcon {
    var displayName: string;
}

type ArrowChevronCloseRightIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowChevronCloseRightIcon(props: ArrowChevronCloseRightIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowChevronCloseRightIcon {
    var displayName: string;
}

type ArrowChevronCloseUpIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowChevronCloseUpIcon(props: ArrowChevronCloseUpIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowChevronCloseUpIcon {
    var displayName: string;
}

type ArrowsCollapseIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowsCollapseIcon(props: ArrowsCollapseIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowsCollapseIcon {
    var displayName: string;
}

type ArrowsExpandIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ArrowsExpandIcon(props: ArrowsExpandIconProps): react_jsx_runtime.JSX.Element;
declare namespace ArrowsExpandIcon {
    var displayName: string;
}

type AscendingIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function AscendingIcon(props: AscendingIconProps): react_jsx_runtime.JSX.Element;
declare namespace AscendingIcon {
    var displayName: string;
}

type BookIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function BookIcon(props: BookIconProps): react_jsx_runtime.JSX.Element;
declare namespace BookIcon {
    var displayName: string;
}

type BookmarkIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function BookmarkIcon(props: BookmarkIconProps): react_jsx_runtime.JSX.Element;
declare namespace BookmarkIcon {
    var displayName: string;
}

type BookmarkSolidIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function BookmarkSolidIcon(props: BookmarkSolidIconProps): react_jsx_runtime.JSX.Element;
declare namespace BookmarkSolidIcon {
    var displayName: string;
}

type BuildIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function BuildIcon(props: BuildIconProps): react_jsx_runtime.JSX.Element;
declare namespace BuildIcon {
    var displayName: string;
}

type BusinessIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function BusinessIcon(props: BusinessIconProps): react_jsx_runtime.JSX.Element;
declare namespace BusinessIcon {
    var displayName: string;
}

type CachedIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CachedIcon(props: CachedIconProps): react_jsx_runtime.JSX.Element;
declare namespace CachedIcon {
    var displayName: string;
}

type CalendarIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CalendarIcon(props: CalendarIconProps): react_jsx_runtime.JSX.Element;
declare namespace CalendarIcon {
    var displayName: string;
}

type CardsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CardsIcon(props: CardsIconProps): react_jsx_runtime.JSX.Element;
declare namespace CardsIcon {
    var displayName: string;
}

type CheckExposedIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CheckExposedIcon(props: CheckExposedIconProps): react_jsx_runtime.JSX.Element;
declare namespace CheckExposedIcon {
    var displayName: string;
}

type CheckOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CheckOutlineIcon(props: CheckOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace CheckOutlineIcon {
    var displayName: string;
}

type ChevronCloseDownIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ChevronCloseDownIcon(props: ChevronCloseDownIconProps): react_jsx_runtime.JSX.Element;
declare namespace ChevronCloseDownIcon {
    var displayName: string;
}

type ChevronCloseLeftIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ChevronCloseLeftIcon(props: ChevronCloseLeftIconProps): react_jsx_runtime.JSX.Element;
declare namespace ChevronCloseLeftIcon {
    var displayName: string;
}

type ChevronCloseRightIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ChevronCloseRightIcon(props: ChevronCloseRightIconProps): react_jsx_runtime.JSX.Element;
declare namespace ChevronCloseRightIcon {
    var displayName: string;
}

type ChevronCloseUpIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ChevronCloseUpIcon(props: ChevronCloseUpIconProps): react_jsx_runtime.JSX.Element;
declare namespace ChevronCloseUpIcon {
    var displayName: string;
}

type ClockIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ClockIcon(props: ClockIconProps): react_jsx_runtime.JSX.Element;
declare namespace ClockIcon {
    var displayName: string;
}

type CloseOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CloseOutlineIcon(props: CloseOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace CloseOutlineIcon {
    var displayName: string;
}

type CloseSoildIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CloseSoildIcon(props: CloseSoildIconProps): react_jsx_runtime.JSX.Element;
declare namespace CloseSoildIcon {
    var displayName: string;
}

type CommentActiveIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CommentActiveIcon(props: CommentActiveIconProps): react_jsx_runtime.JSX.Element;
declare namespace CommentActiveIcon {
    var displayName: string;
}

type CommentDefaultIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CommentDefaultIcon(props: CommentDefaultIconProps): react_jsx_runtime.JSX.Element;
declare namespace CommentDefaultIcon {
    var displayName: string;
}

type CommentOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CommentOutlineIcon(props: CommentOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace CommentOutlineIcon {
    var displayName: string;
}

type ControlsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ControlsIcon(props: ControlsIconProps): react_jsx_runtime.JSX.Element;
declare namespace ControlsIcon {
    var displayName: string;
}

type CopyIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CopyIcon(props: CopyIconProps): react_jsx_runtime.JSX.Element;
declare namespace CopyIcon {
    var displayName: string;
}

type CreateIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function CreateIcon(props: CreateIconProps): react_jsx_runtime.JSX.Element;
declare namespace CreateIcon {
    var displayName: string;
}

type DeleteIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DeleteIcon(props: DeleteIconProps): react_jsx_runtime.JSX.Element;
declare namespace DeleteIcon {
    var displayName: string;
}

type DescendingIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DescendingIcon(props: DescendingIconProps): react_jsx_runtime.JSX.Element;
declare namespace DescendingIcon {
    var displayName: string;
}

type DestructiveActionModalProps = Omit<ModalProps, "titleIcon" | "titleHeader" | "hideCancelBtn" | "hideBtn">;
declare function DestructiveActionModal({ children, ...props }: DestructiveActionModalProps): react_jsx_runtime.JSX.Element;

type DetailsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DetailsIcon(props: DetailsIconProps): react_jsx_runtime.JSX.Element;
declare namespace DetailsIcon {
    var displayName: string;
}

type DocumentsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DocumentsIcon(props: DocumentsIconProps): react_jsx_runtime.JSX.Element;
declare namespace DocumentsIcon {
    var displayName: string;
}

type DoubleChevronDownIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DoubleChevronDownIcon(props: DoubleChevronDownIconProps): react_jsx_runtime.JSX.Element;
declare namespace DoubleChevronDownIcon {
    var displayName: string;
}

type DoubleChevronLeftIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DoubleChevronLeftIcon(props: DoubleChevronLeftIconProps): react_jsx_runtime.JSX.Element;
declare namespace DoubleChevronLeftIcon {
    var displayName: string;
}

type DoubleChevronRightIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DoubleChevronRightIcon(props: DoubleChevronRightIconProps): react_jsx_runtime.JSX.Element;
declare namespace DoubleChevronRightIcon {
    var displayName: string;
}

type DoubleChevronUpIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DoubleChevronUpIcon(props: DoubleChevronUpIconProps): react_jsx_runtime.JSX.Element;
declare namespace DoubleChevronUpIcon {
    var displayName: string;
}

type DownloadIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function DownloadIcon(props: DownloadIconProps): react_jsx_runtime.JSX.Element;
declare namespace DownloadIcon {
    var displayName: string;
}

type EmailIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function EmailIcon(props: EmailIconProps): react_jsx_runtime.JSX.Element;
declare namespace EmailIcon {
    var displayName: string;
}

type ErrorInfoOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ErrorInfoOutlineIcon(props: ErrorInfoOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace ErrorInfoOutlineIcon {
    var displayName: string;
}

type ErrorInfoSolidIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ErrorInfoSolidIcon(props: ErrorInfoSolidIconProps): react_jsx_runtime.JSX.Element;
declare namespace ErrorInfoSolidIcon {
    var displayName: string;
}

type ExcludeIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ExcludeIcon(props: ExcludeIconProps): react_jsx_runtime.JSX.Element;
declare namespace ExcludeIcon {
    var displayName: string;
}

type ExportIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ExportIcon(props: ExportIconProps): react_jsx_runtime.JSX.Element;
declare namespace ExportIcon {
    var displayName: string;
}

type FavoriteIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function FavoriteIcon(props: FavoriteIconProps): react_jsx_runtime.JSX.Element;
declare namespace FavoriteIcon {
    var displayName: string;
}

type FilterIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function FilterIcon(props: FilterIconProps): react_jsx_runtime.JSX.Element;
declare namespace FilterIcon {
    var displayName: string;
}

type FixIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function FixIcon(props: FixIconProps): react_jsx_runtime.JSX.Element;
declare namespace FixIcon {
    var displayName: string;
}

type FullScreenIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function FullScreenIcon(props: FullScreenIconProps): react_jsx_runtime.JSX.Element;
declare namespace FullScreenIcon {
    var displayName: string;
}

type FullScreenExitIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function FullScreenExitIcon(props: FullScreenExitIconProps): react_jsx_runtime.JSX.Element;
declare namespace FullScreenExitIcon {
    var displayName: string;
}

type GraphIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function GraphIcon(props: GraphIconProps): react_jsx_runtime.JSX.Element;
declare namespace GraphIcon {
    var displayName: string;
}

type HamburgerIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function HamburgerIcon(props: HamburgerIconProps): react_jsx_runtime.JSX.Element;
declare namespace HamburgerIcon {
    var displayName: string;
}

type HelpIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function HelpIcon(props: HelpIconProps): react_jsx_runtime.JSX.Element;
declare namespace HelpIcon {
    var displayName: string;
}

type HighlightIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function HighlightIcon(props: HighlightIconProps): react_jsx_runtime.JSX.Element;
declare namespace HighlightIcon {
    var displayName: string;
}

type IncludeIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function IncludeIcon(props: IncludeIconProps): react_jsx_runtime.JSX.Element;
declare namespace IncludeIcon {
    var displayName: string;
}

type InfoOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function InfoOutlineIcon(props: InfoOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace InfoOutlineIcon {
    var displayName: string;
}

type InfoSolidIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function InfoSolidIcon(props: InfoSolidIconProps): react_jsx_runtime.JSX.Element;
declare namespace InfoSolidIcon {
    var displayName: string;
}

type KabobHorizontalIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function KabobHorizontalIcon(props: KabobHorizontalIconProps): react_jsx_runtime.JSX.Element;
declare namespace KabobHorizontalIcon {
    var displayName: string;
}

type KabobVerticalIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function KabobVerticalIcon(props: KabobVerticalIconProps): react_jsx_runtime.JSX.Element;
declare namespace KabobVerticalIcon {
    var displayName: string;
}

type LayoutIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function LayoutIcon(props: LayoutIconProps): react_jsx_runtime.JSX.Element;
declare namespace LayoutIcon {
    var displayName: string;
}

type LightbulbIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function LightbulbIcon(props: LightbulbIconProps): react_jsx_runtime.JSX.Element;
declare namespace LightbulbIcon {
    var displayName: string;
}

type LinkIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function LinkIcon(props: LinkIconProps): react_jsx_runtime.JSX.Element;
declare namespace LinkIcon {
    var displayName: string;
}

type LogoIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function LogoIcon(props: LogoIconProps): react_jsx_runtime.JSX.Element;
declare namespace LogoIcon {
    var displayName: string;
}

type MinusIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function MinusIcon(props: MinusIconProps): react_jsx_runtime.JSX.Element;
declare namespace MinusIcon {
    var displayName: string;
}

type NewTabIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function NewTabIcon(props: NewTabIconProps): react_jsx_runtime.JSX.Element;
declare namespace NewTabIcon {
    var displayName: string;
}

type NewsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function NewsIcon(props: NewsIconProps): react_jsx_runtime.JSX.Element;
declare namespace NewsIcon {
    var displayName: string;
}

type NotificationFilledIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function NotificationFilledIcon(props: NotificationFilledIconProps): react_jsx_runtime.JSX.Element;
declare namespace NotificationFilledIcon {
    var displayName: string;
}

type NotificationOutlinedIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function NotificationOutlinedIcon(props: NotificationOutlinedIconProps): react_jsx_runtime.JSX.Element;
declare namespace NotificationOutlinedIcon {
    var displayName: string;
}

type PeopleIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function PeopleIcon(props: PeopleIconProps): react_jsx_runtime.JSX.Element;
declare namespace PeopleIcon {
    var displayName: string;
}

type PinIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function PinIcon(props: PinIconProps): react_jsx_runtime.JSX.Element;
declare namespace PinIcon {
    var displayName: string;
}

type PlaceIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function PlaceIcon(props: PlaceIconProps): react_jsx_runtime.JSX.Element;
declare namespace PlaceIcon {
    var displayName: string;
}

type PlaceOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function PlaceOutlineIcon(props: PlaceOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace PlaceOutlineIcon {
    var displayName: string;
}

type ProfileIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ProfileIcon(props: ProfileIconProps): react_jsx_runtime.JSX.Element;
declare namespace ProfileIcon {
    var displayName: string;
}

type ProjectIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ProjectIcon(props: ProjectIconProps): react_jsx_runtime.JSX.Element;
declare namespace ProjectIcon {
    var displayName: string;
}

type RatingProps = RatingProps$1;
declare function Rating(props: RatingProps): react_jsx_runtime.JSX.Element;
declare namespace Rating {
    var displayName: string;
}

type SaveIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function SaveIcon(props: SaveIconProps): react_jsx_runtime.JSX.Element;
declare namespace SaveIcon {
    var displayName: string;
}

type SearchIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function SearchIcon(props: SearchIconProps): react_jsx_runtime.JSX.Element;
declare namespace SearchIcon {
    var displayName: string;
}

type SendIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function SendIcon(props: SendIconProps): react_jsx_runtime.JSX.Element;
declare namespace SendIcon {
    var displayName: string;
}

type SettingsIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function SettingsIcon(props: SettingsIconProps): react_jsx_runtime.JSX.Element;
declare namespace SettingsIcon {
    var displayName: string;
}

type ShareIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ShareIcon(props: ShareIconProps): react_jsx_runtime.JSX.Element;
declare namespace ShareIcon {
    var displayName: string;
}

type ShareArrowIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ShareArrowIcon(props: ShareArrowIconProps): react_jsx_runtime.JSX.Element;
declare namespace ShareArrowIcon {
    var displayName: string;
}

type StarFilledIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function StarFilledIcon(props: StarFilledIconProps): react_jsx_runtime.JSX.Element;
declare namespace StarFilledIcon {
    var displayName: string;
}

type SiteIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function SiteIcon(props: SiteIconProps): react_jsx_runtime.JSX.Element;
declare namespace SiteIcon {
    var displayName: string;
}

type StarHalfFilledIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function StarHalfFilledIcon(props: StarHalfFilledIconProps): react_jsx_runtime.JSX.Element;
declare namespace StarHalfFilledIcon {
    var displayName: string;
}

type StarOutlineIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function StarOutlineIcon(props: StarOutlineIconProps): react_jsx_runtime.JSX.Element;
declare namespace StarOutlineIcon {
    var displayName: string;
}

type TableIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function TableIcon(props: TableIconProps): react_jsx_runtime.JSX.Element;
declare namespace TableIcon {
    var displayName: string;
}

type TagIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function TagIcon(props: TagIconProps): react_jsx_runtime.JSX.Element;
declare namespace TagIcon {
    var displayName: string;
}

type ThreatIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ThreatIcon(props: ThreatIconProps): react_jsx_runtime.JSX.Element;
declare namespace ThreatIcon {
    var displayName: string;
}

type ThreeSixtyIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function ThreeSixtyIcon(props: ThreeSixtyIconProps): react_jsx_runtime.JSX.Element;
declare namespace ThreeSixtyIcon {
    var displayName: string;
}

type TranslateIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function TranslateIcon(props: TranslateIconProps): react_jsx_runtime.JSX.Element;
declare namespace TranslateIcon {
    var displayName: string;
}

type VisibilityIconProps = SvgIconProps & {
    fillColor?: string;
};
declare function VisibilityIcon(props: VisibilityIconProps): react_jsx_runtime.JSX.Element;
declare namespace VisibilityIcon {
    var displayName: string;
}

declare const HelloWorld: () => string;
/**
 * Formats a JS date, using the luxon library, to according to `format`
 * @param date - A JS Object date
 * @param format - Optional. String format for the luxon library. See https://moment.github.io/luxon/#/formatting?id=table-of-tokens.
 *   If undefined, will use military time `yyyy-MM-dd hh:mm 'GMT'Z`
 * @returns A string representing `date`
 */
declare function formatDate(date: Date, format?: string): string;
/**
 * Returns shortened version of number
 * ie: 1,000 => 1K; 1,000,000 => 1M; etc.
 * @param count Number that should be shortened
 * @returns Shortened (if necessary) string version of the count given.
 */
declare function shortenNumber(count: number): string;
declare function objectsEqual(o1: object | undefined, o2: object | undefined): boolean;
declare const mapFilterIdToFriendlyLabel: (key: string) => string;
declare const truncateString: (string: string, trimBy: number, withEllipsis?: boolean) => string;

type TypographyProps = TypographyProps$1;
declare const Typography: (props: TypographyProps) => react_jsx_runtime.JSX.Element;

interface TruncateTextProps {
    text: string;
    maxLength: number;
    tooltipProps?: React__default.ComponentProps<typeof Tooltip>;
    typographyProps?: React__default.ComponentProps<typeof Typography>;
}
declare const TruncateText: React__default.FC<TruncateTextProps>;

declare function ThemeProvider(props: any): react_jsx_runtime.JSX.Element;

type ExportMenuItemType = {
    label: string;
    onClick: () => void;
};
type ExportMenuProps = {
    menuItems: ExportMenuItemType[];
    toggleBtnIcon?: React.ReactNode;
    isReport?: boolean;
    withPrint?: boolean;
    withViewFullScreen?: boolean;
    onPrintClick?: () => void;
    onFullScreenClick?: () => void;
    onExportIconClick?: () => void;
    exportText?: string;
    altExportIcon?: React.ReactNode;
    hideDivider?: boolean;
};
declare function ExportMenu(props: ExportMenuProps): react_jsx_runtime.JSX.Element;
declare namespace ExportMenu {
    var displayName: string;
}

type FullDocHeaderProps = TypographyProps$1 & {
    title: string;
};
declare function FullDocHeader(props: FullDocHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace FullDocHeader {
    var displayName: string;
}

type AccessQuotaItemProps = {
    title: string | React.ReactFragment;
    onClick?: () => void;
    subtitle?: string;
    progressIndicator: React.ReactNode & {
        props: ProgressProps;
    };
};
type AccessQuotaProps = {
    menuItems: AccessQuotaItemProps[];
};
declare const AccessQuota: {
    (props: AccessQuotaProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare function usePrevious(value: any): undefined;

declare function useNSFWBlur(): string | number | null;

interface Project {
    name: string;
    id: string;
    bookmarkedOn?: boolean;
}
interface BookmarkModalProps extends ModalProps {
    modalText?: string;
    documentName: string;
    existingProjects?: Project[];
    multipleProjects?: boolean;
    onConfirmBookmarks: (bookmarkInfo: {
        newBookmarkedProjects?: Project[];
        unbookmarkedProjects?: Project[];
        newProject?: {
            name: string;
            description?: string;
        };
    }) => void;
    placeholderText?: string;
    newProjectNameErrorMsg?: string;
    onChangeNewProjectName: (msg: string | undefined) => void;
    setExpandedNew: (val: boolean) => void;
    expandedNew: boolean;
}
declare function BookmarkModal(props: BookmarkModalProps): react_jsx_runtime.JSX.Element;

declare const DeepSearchStatus: {
    inactive: string;
    active: string;
    complete: string;
    failure: string;
};
type DeepSearchButtonProps = {
    status?: "inactive" | "active" | "complete" | "failure";
    onClick?: () => void;
    disabled?: boolean;
    persistentSearchDate?: Date;
};
declare const DeepSearchButton: {
    (props: DeepSearchButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type jumpMenuItem = {
    label: string;
    icon: React__default.ReactNode;
    onClick: () => void;
};
type SubNavMenuProps = {
    activeTab?: number;
    tabOnClick: (index: number) => void;
    withDeepSearch?: boolean;
    deepSearchOnClick?: () => void;
    jumpMenuItems?: jumpMenuItem[];
    deepSearchStatus?: DeepSearchButtonProps["status"];
    searchCategory?: string;
    deepSearchElem?: React__default.ReactNode;
    documentCount?: number;
    temporaryHideOverviewTab?: boolean;
};
declare const SubNavMenu: (props: SubNavMenuProps) => react_jsx_runtime.JSX.Element;

type SearchCategoryType = {
    icon: React.ReactNode;
    label: string;
    permission?: IFeature;
    onClick?: (category?: SearchCategoryType) => void;
};
type SearchSelectProps = {
    options: SearchCategoryType[];
    getAnchorEl?: () => HTMLElement;
    onSelect: (option: SearchCategoryType) => void;
    selectedCategory?: SearchCategoryType;
    onOpen?: () => void;
    onClose?: () => void;
};
declare const SearchSelect: _emotion_styled.StyledComponent<SearchSelectProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;

type SkeletonCardProps = {
    height?: number | string;
    maxWidth?: number | string;
    variant?: "personCard";
};
declare function SkeletonCard(props: SkeletonCardProps): react_jsx_runtime.JSX.Element;
declare namespace SkeletonCard {
    var displayName: string;
}

declare function SentimentIcon(props: {
    fillColor: string;
}): react_jsx_runtime.JSX.Element;
declare function injectSentiment(payload: any[] | undefined, theme: typeof darkTheme): any[];

type ErrorBoundaryProps = {
    customerSupportCallback: () => void;
    refreshCallback: () => void;
};
declare const ErrorBoundary: (props: ErrorBoundaryProps) => react_jsx_runtime.JSX.Element;

interface NewProjectSectionProps {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    name?: string;
    description?: string;
    error?: boolean;
    errorMsg?: string;
    setName?: InputTextProps["onChange"];
    setDescription?: InputTextareaProps["onChange"];
}
declare function NewProjectSection(props: NewProjectSectionProps): react_jsx_runtime.JSX.Element;

declare function highlightText(text: string, theme: CustomTheme, highlightID?: string): string | React.JSX.Element | React.JSX.Element[] | undefined;

declare const babelStreetDateTimeFormat = "YYYY-MM-DD hh:mm";
type IDateRange = DateRange<Dayjs | null>;

declare const SnackbarList: React__default.FC;

declare const SnackBarContext: React__default.Context<SnackStackContextProps>;
declare const SnackBarProvider: React__default.FC<React__default.PropsWithChildren>;
declare const useSnackBar: () => SnackStackContextProps;

type ToastProps = {
    /**
     * Key to render multiple toasts.
     * This is being set automatically unless specified manually.
     */
    key?: number | string;
    /**
     * Alert title
     */
    title?: string;
    /**
     * Alert message
     */
    message?: React__default.ReactNode;
    /**
     * Custom component or html-layout
     */
    children?: React__default.ReactElement;
    /**
     * Indicates when the alert will disappear in ms. Defaults too 5000.
     * Pass 0 for infinite duration.
     */
    duration?: number;
    /**
     * Alert color
     */
    severity?: "success" | "info" | "warning" | "error";
    /**
     * Alert position on the screen
     */
    position?: {
        vertical?: "top" | "bottom";
        horizontal?: "left" | "right" | "center";
    };
    /**
     * On Close callback
     */
    onClose?: () => void;
    ctaProps?: ButtonProps;
};
type SnackStackContextProps = {
    toastsList: ToastProps[];
    setToastsList: (toasts: ToastProps[]) => void;
    addToast: (toast: ToastProps) => void;
    addMultipleToast: (toasts: ToastProps[]) => void;
    removeToast: (key: ToastProps["key"]) => void;
};

type PaneDataToggleProps = ToggleButtonGroupProps & {
    selectedIndex: number;
    setSelectedIndex: (value: number) => void;
};
declare function PaneDataToggle(props: PaneDataToggleProps): react_jsx_runtime.JSX.Element;
declare namespace PaneDataToggle {
    var displayName: string;
}

type CustomTheme = {
    [Key in keyof typeof darkTheme]: (typeof darkTheme)[Key];
};

export { AccessQuota, AccessQuotaProps, Accordion, AccordionProps, AddComment, AddCommentProps, AddFilterIcon, AddFilterIconProps, AddIcon, AddIconProps, AdditionalSearchOption, Alert, AlertProps, AppsIcon, AppsIconProps, AreaZoomIcon, AreaZoomIconProps, ArrowChevronCloseDownIcon, ArrowChevronCloseDownIconProps, ArrowChevronCloseDownSortIcon, ArrowChevronCloseDownSortIconProps, ArrowChevronCloseLeftIcon, ArrowChevronCloseLeftIconProps, ArrowChevronCloseRightIcon, ArrowChevronCloseRightIconProps, ArrowChevronCloseUpIcon, ArrowChevronCloseUpIconProps, ArrowsCollapseIcon, ArrowsCollapseIconProps, ArrowsExpandIcon, ArrowsExpandIconProps, ArticleSearchResultCard, ArticleSearchResultCardProps, AscendingIcon, AscendingIconProps, Avatar, AvatarProps, Backdrop, BackdropProps, Badge, BadgeProps, BarChart, BarChartData, BarChartProps, BookIcon, BookIconProps, BookmarkIcon, BookmarkIconProps, BookmarkModal, BookmarkModalProps, BookmarkSolidIcon, BookmarkSolidIconProps, Breadcrumb, BreadcrumbProps, BuildIcon, BuildIconProps, BusinessIcon, BusinessIconProps, BusinessSearchResultCard, BusinessSearchResultCardProps, Button, ButtonProps, CachedIcon, CachedIconProps, CalendarIcon, CalendarIconProps, CardCarousel, CardCarouselProps, CardMenu, CardProps, CardsIcon, CardsIconProps, CheckExposedIcon, CheckExposedIconProps, CheckOutlineIcon, CheckOutlineIconProps, CheckSolidIcon, CheckSolidIconProps, ChevronCloseDownIcon, ChevronCloseDownIconProps, ChevronCloseLeftIcon, ChevronCloseLeftIconProps, ChevronCloseRightIcon, ChevronCloseRightIconProps, ChevronCloseUpIcon, ChevronCloseUpIconProps, Chip, ChipBooleanSearch, ChipBooleanSearchProps, ChipProps, ChipType, ClockIcon, ClockIconProps, CloseOutlineIcon, CloseOutlineIconProps, CloseSoildIcon, CloseSoildIconProps, CollapsibleList, CollapsibleListProps, CommentActiveIcon, CommentActiveIconProps, CommentDefaultIcon, CommentDefaultIconProps, CommentOutlineIcon, CommentOutlineIconProps, CommentPanel, CommentPanelProps, ControlsIcon, ControlsIconProps, CopyIcon, CopyIconProps, CreateIcon, CreateIconProps, CustomTheme, DataTable, DataTableProps, DeepSearchButton, DeepSearchButtonProps, DeepSearchStatus, DeleteIcon, DeleteIconProps, DescendingIcon, DescendingIconProps, DestructiveActionModal, DestructiveActionModalProps, DetailsIcon, DetailsIconProps, Divider, DividerProps, DocumentsIcon, DocumentsIconProps, DonutChart, DonutChartProps, DoubleChevronDownIcon, DoubleChevronDownIconProps, DoubleChevronLeftIcon, DoubleChevronLeftIconProps, DoubleChevronRightIcon, DoubleChevronRightIconProps, DoubleChevronUpIcon, DoubleChevronUpIconProps, DownloadIcon, DownloadIconProps, Drawer, DrawerProps, EmailIcon, EmailIconProps, ErrorBoundary, ErrorInfoOutlineIcon, ErrorInfoOutlineIconProps, ErrorInfoSolidIcon, ErrorInfoSolidIconProps, ExcludeIcon, ExcludeIconProps, ExportIcon, ExportIconProps, ExportMenu, ExportMenuItemType, Fab, FabProps, FavoriteIcon, FavoriteIconProps, FilterIcon, FilterIconProps, FixIcon, FixIconProps, FullDocHeader, FullScreenExitIcon, FullScreenExitIconProps, FullScreenIcon, FullScreenIconProps, GraphIcon, GraphIconProps, HamburgerIcon, HamburgerIconProps, HelloWorld, HelpIcon, HelpIconProps, HighlightIcon, HighlightIconProps, HomepageProjectCard, IDateRange, IDateType, IFeature, IconButton, IconButtonProps, IconExample, IconExampleProps, ImageZoomAndPan, ImageZoomAndPanProps, IncludeIcon, IncludeIconProps, InfoOutlineIcon, InfoOutlineIconProps, InfoSolidIcon, InfoSolidIconProps, InputAutocomplete, InputAutocompleteProps, InputCheckbox, InputCheckboxGroup, InputCheckboxGroupProps, InputCheckboxProps, InputDateRangePicker, InputDateRangePickerProps, InputDateTimePicker, InputDateTimePickerProps, InputDatepicker, InputDatepickerProps, InputGroupLabel, InputGroupLabelProps, InputLabel, InputLabelProps, InputModal, InputRadioButton, InputRadioButtonGroup, InputRadioButtonGroupProps, InputRadioButtonProps, InputRangeSliderProps, InputSearch, InputSearchProps, InputSelect, InputSelectItem, InputSelectProps, InputSwitch, InputSwitchProps, InputText, InputTextProps, InputTextarea, InputTextareaProps, InputTimePicker, InputTimePickerProps, JumpMenu, JumpMenuProps, KabobHorizontalIcon, KabobHorizontalIconProps, KabobVerticalIcon, KabobVerticalIconProps, Label, LabelProps, LayoutIcon, LayoutIconProps, LightbulbIcon, LightbulbIconProps, LineChart, LineChartProps, Link, LinkIcon, LinkIconProps, LinkProps, List, ListProps, LogoIcon, LogoIconProps, Menu, MenuProps, MinusIcon, MinusIconProps, Modal, ModalProps, NewProjectSection, NewProjectSectionProps, NewTabIcon, NewTabIconProps, NewsIcon, NewsIconProps, NotificationFilledIcon, NotificationFilledIconProps, NotificationOutlinedIcon, NotificationOutlinedIconProps, Pagination, PaginationProps, PaneDataToggle, PaneDataToggleProps, PeopleIcon, PeopleIconProps, PersonSearchResultCard, PersonSearchResultCardProps, PinIcon, PinIconProps, PlaceIcon, PlaceIconProps, PlaceOutlineIcon, PlaceOutlineIconProps, PostSearchResultCard, PostSearchResultCardProps, ProfileIcon, ProfileIconProps, Progress, ProgressProps, ProjectIcon, ProjectIconProps, Pulse, PulseProps, QueryCard, QueryCardProps, Rating, RatingProps, ReportCard, SaveIcon, SaveIconProps, Search, SearchCategoryType, SearchIcon, SearchIconProps, SearchProps, SearchSelect, SearchSelectProps, SearchState, SendIcon, SendIconProps, SentimentIcon, SettingsIcon, SettingsIconProps, ShareArrowIcon, ShareArrowIconProps, ShareCard, ShareIcon, ShareIconProps, SingleComment, SingleCommentProps, SiteIcon, SiteIconProps, Skeleton, SkeletonCard, SkeletonCardProps, SkeletonProps, Slider, SnackBarContext, SnackBarProvider, SnackStackContextProps, Snackbar, SnackbarList, SnackbarProps, SnapshotCard, StarFilledIcon, StarFilledIconProps, StarHalfFilledIcon, StarHalfFilledIconProps, StarOutlineIcon, StarOutlineIconProps, StaticList, StaticListProps, SubNavMenu, SubNavMenuProps, TabProps, Table, TableIcon, TableIconProps, TableProps, TableSortable, TableSortableProps, Tabs, TabsProps, Tag, TagGroup, TagIcon, TagIconProps, TagProps, ThemeProvider, ThreatIcon, ThreatIconProps, ThreeSixtyIcon, ThreeSixtyIconProps, TimeZoneProps, ToastProps, ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, ToggleButtonProps, Tooltip, TooltipProps, TranslateIcon, TranslateIconProps, TruncateText, Typography, TypographyProps, ValidationError, VisibilityIcon, VisibilityIconProps, WordCloud, WordCloudProps, babelStreetDateTimeFormat, darkTheme, dropdownStateType, formatDate, highlightText, injectSentiment, lightTheme, mapFilterIdToFriendlyLabel, objectsEqual, peopleFormType, peopleFormValidationType, peopleSearchOptionsType, searchCategoryOptions, searchOptionsType, shortenNumber, truncateString, useNSFWBlur, usePrevious, useSnackBar };
