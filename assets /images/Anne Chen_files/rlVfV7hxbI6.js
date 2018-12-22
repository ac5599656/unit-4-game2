if (self.CavalryLogger) { CavalryLogger.start_js(["aOfh5"]); }

__d("SocialGoodCharityActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAbTestNamesToGroups=function(a){this.$1.ab_test_names_to_groups=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setAttributes=function(a){this.$1.attributes=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setCampaignID=function(a){this.$1.campaign_id=a;return this};a.prototype.setCampaignType=function(a){this.$1.campaign_type=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setExplicitPostID=function(a){this.$1.explicit_post_id=a;return this};a.prototype.setFundraiserID=function(a){this.$1.fundraiser_id=a;return this};a.prototype.setHasPaymentMethodOnFile=function(a){this.$1.has_payment_method_on_file=a;return this};a.prototype.setParentEventType=function(a){this.$1.parent_event_type=a;return this};a.prototype.setSessionID=function(a){this.$1.session_id=a;return this};a.prototype.setSourceAttributes=function(a){this.$1.source_attributes=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={ab_test_names_to_groups:!0,attributes:!0,campaign_id:!0,campaign_type:!0,event:!0,explicit_post_id:!0,fundraiser_id:!0,has_payment_method_on_file:!0,parent_event_type:!0,session_id:!0,source_attributes:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FundraiserCampaignType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FACEBOOK_TO_USER:1,DONATE_BUTTON_ON_PAGE:2,DONATE_BUTTON_ON_ADS:3,CHARITY_TO_USER:4,DONATE_BUTTON_ON_POST:5,USER_TO_CHARITY:6,DONATE_BUTTON_ON_LIVE_VIDEO:7,LIGHTWEIGHT_FUNDRAISER_FOR_STORY:8,PERSON_FOR_PERSON:9,CRISIS_FOR_CHARITY:10})}),null);
__d("SocialGoodCharityActionsLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INITIALIZATION_DEBUG:"initialization_debug",INITIALIZATION_BEGIN:"initialization_begin",INITIALIZATION_ERROR:"initialization_error",INITIALIZATION:"initialization",PREPARE_PAYMENT_METHOD:"prepare_payment_method",VIEW_PUX_DONATE_FORM:"view_pux_donate_form",VIEW_NUX_DONATE_FORM:"view_nux_donate_form",PUX_METHOD:"pux_method",NUX_METHOD:"nux_method",FRAUD_CHECK_BEGIN:"fraud_check_begin",FRAUD_CHECK:"fraud_check",CHARGE_CREDENTIAL:"charge_credential",SEND_NMOR_DONATION_REQUEST:"send_nmor_donation_request",RECEIVE_NMOR_DONATION_RESPONSE:"receive_nmor_donation_response",COMPLETE_DONATE:"complete_donate",SHARE_EMAIL_WITH_CHARITY:"share_email_with_charity",GENERATE_SOCIAL_CONTEXT:"generate_social_context",DELETE_DONATION:"delete_donation",FUNDRAISER_PAGE_SHARE_IMPRESSION:"fundraiser_page_share_impression",CREATE_PROMO_FUNDRAISER_BEGIN:"create_promo_fundraiser_begin",CREATE_PROMO_SELECT_CHARITY:"create_promo_select_charity",CREATE_PROMO_SEE_MORE_CHARITIES:"create_promo_see_more_charities",CREATE_FUNDRAISER_OPEN:"create_fundraiser_open",CREATE_FUNDRAISER_BEGIN:"create_fundraiser_begin",CREATE_FUNDRAISER_UNPUBLISHED:"create_fundraiser_unpublished",CREATE_FUNDRAISER_PUBLISHED:"create_fundraiser_published",EDIT_FUNDRAISER_BEGIN:"edit_fundraiser_begin",EDIT_FUNDRAISER_COMPLETE:"edit_fundraiser_complete",EDIT_P4P_BENEFICIARY:"edit_p4p_beneficiary",P4P_CONNECT_STRIPE:"p4p_connect_stripe",INTERACT_WITH_MISSION_CARD:"interact_with_mission_card",TOGGLE_NOTIFICATIONS_ON_FUNDRAISER:"toggle_notifications_on_fundraiser",REMOVE_SELF_FROM_INVITE_LIST:"remove_self_from_invite_list",STRIPE_CREATION_REQUIRES_INFO:"stripe_creation_requires_info",AUTO_DELETE_FUNDRAISER_DRAFT:"auto_delete_fundraiser_draft",CREATE_FUNDRAISER_DRAFT:"create_fundraiser_draft",DELETE_FUNDRAISER_DRAFT:"delete_fundraiser_draft",DISCARD_FUNDRAISER_DRAFT:"discard_fundraiser_draft",SAVE_FUNDRAISER_DRAFT:"save_fundraiser_draft",SET_FUNDRAISER_DRAFT:"set_fundraiser_draft",FUNDRAISER_APPROVED_BY_SRT:"fundraiser_approved_by_srt",FUNDRAISER_REJECTED_BY_SRT:"fundraiser_rejected_by_srt",FUNDRAISER_PAUSED_BY_SRT:"fundraiser_paused_by_srt",FUNDRAISER_UNPAUSED_BY_SRT:"fundraiser_unpaused_by_Srt",FUNDRAISER_DONATION_FLOW_EMAIL_OPT_IN_CHECKED:"fundraiser_donation_flow_email_opt_in_checked",FUNDRAISER_DONATION_FLOW_EMAIL_OPT_OUT_CHECKED:"fundraiser_donation_flow_email_opt_out_checked",DIALOG_BEFORE_UNLOAD:"dialog_before_unload",DIALOG_CANCEL:"dialog_cancel",DIALOG_CONFIRM:"dialog_confirm",DIALOG_UNLOAD:"dialog_unload",DIALOG_VALIDATION_ERROR:"dialog_validation_error",CHANGE_CATEGORY:"change_category",CHANGE_TITLE:"change_title",CHANGE_DESCRIPTION:"change_description",CHANGE_DESCRIPTION_SECOND_QUESTION:"change_description_second_question",CHANGE_END_DATE:"change_end_date",CHANGE_GOAL_AMOUNT:"change_goal_amount",CHANGE_CURRENCY:"change_currency",CHANGE_COVER_PHOTO:"change_cover_photo",UPLOAD_COVER_PHOTO:"upload_cover_photo",CHOOSE_OTHER_CATEGORY:"choose_other_category",REPOSITION_COVER_PHOTO:"reposition_cover_photo",UPLOAD_COVER_PHOTO_SUCCESS:"upload_cover_photo_success",UPLOAD_COVER_PHOTO_FAIL:"upload_cover_photo_fail",FEED_PAYLOAD_CHANGE_DESCRIPTION:"feed_payload_change_description",FEED_PAYLOAD_CHANGE_GOAL:"feed_payload_change_goal",CHANGE_COVER_PHOTO_BEGIN:"change_cover_photo_begin",CHANGE_CHARITY:"change_charity",SEARCH_RESPONSE:"search_response",VIEW_CHARITY_ON_SELECTOR:"view_charity_on_selector",SEARCH_RESPONSE_EMPTY:"search_response_empty",SEARCH_GRAPHQL_RESPONSE_EMPTY:"search_graphql_response_empty",SEARCH_CHARITIES:"search_charities",SEARCH_CATEGORIES:"search_categories",TAPPED_NONPROFIT_CAUSE:"tapped_nonprofit_cause",TAPPED_SEARCH_ALL_NONPROFITS:"tapped_search_all_nonprofits",DELETE_BEGIN:"delete_begin",DELETE_COMPLETE:"delete_complete",VIEW_CREATE_FORM:"view_create_form",END_FUNDRAISER_BEGIN:"end_fundraiser_begin",END_FUNDRAISER_COMPLETE:"end_fundraiser_complete",DISABLE_FUNDRAISER_FOR_STORY_BEGIN:"disable_fundraiser_for_story_begin",DISABLE_FUNDRAISER_FOR_STORY_COMPLETE:"disable_fundraiser_for_story_complete",CREATE_FLOW_MULTISTEP_BASIC_INFO:"create_flow_multistep_basic_info",CREATE_FLOW_MULTISTEP_STORY:"create_flow_multistep_story",CREATE_FLOW_MULTISTEP_MEDIA:"create_flow_multistep_media",CREATE_FLOW_CHANGE_ACTOR:"create_flow_change_actor",CONFIRM_INFO_DIALOG:"confirm_info_dialog",VIEW_INFO_DIALOG:"view_info_dialog",SEARCH_BENEFICIARIES:"fundraiser_creation_search_beneficiaries",CHANGE_BENEFICIARY:"change_beneficiary",OPEN_CHARITY_BENEFICIARY_SELECTOR:"open_charity_beneficiary_selector",OPEN_CUSTOM_BENEFICIARY_FLOW:"open_custom_beneficiary_flow",OPEN_FRIEND_BENEFICIARY_SELECTOR:"open_friend_beneficiary_selector",VIEW_BENEFICIARY_SELECTOR:"view_beneficiary_selector",NONPROFIT_KEYWORD_DETECTED:"nonprofit_keyword_detected",LOAD_NONPROFIT_DETECTED_DIALOG:"load_nonprofit_detected_dialog",CHOOSE_CREATE_P4P_ANYWAYS:"choose_create_p4p_anyways",CHOOSE_CREATE_P4C_INSTEAD:"choose_create_p4c_instead",CREATE_FLOW_CHANGE_P4P_CURRENCY:"fundraiser_change_p4p_currency",CREATE_FLOW_CHANGE_P4P_COUNTRY:"fundraiser_change_p4p_country",CREATE_FLOW_TAPPED_P4P_CHANGE_COUNTRY:"fundraiser_tapped_p4p_change_country",CREATE_FLOW_TAPPED_P4P_CHANGE_CURRENCY:"fundraiser_tapped_p4p_change_currency",INVITE_DIALOG_INITIAL_LOAD:"invite_dialog_inital_load",INVITE_DIALOG_BOOTSTRAP_ENTRIES:"invite_dialog_bootstrap_entries",INVITE_DIALOG_BOOTSTRAP_FILTER_GROUPS:"invite_dialog_bootstrap_filter_groups",INVITE_DIALOG_UPDATE_QUERY:"invite_dialog_update_query",INVITE_DIALOG_SELECT_ENTRY:"invite_dialog_select_entry",INVITE_DIALOG_DESELECT_ENTRY:"invite_dialog_deselect_entry",INVITE_DIALOG_SELECT_ALL_ENTRIES:"invite_dialog_select_all_entries",INVITE_DIALOG_DESELECT_ALL_ENTRIES:"invite_dialog_deselect_all_entries",INVITE_DIALOG_EXPAND_GROUP:"invite_dialog_expand_group",INVITE_DIALOG_COLLAPSE_GROUP:"invite_dialog_collaps_group",INVITE_DIALOG_SET_ACTIVE_FILTER:"invite_dialog_set_active_filter",INVITE_DIALOG_SET_DONATED_TO_FUNDRAISER_FILTER:"invite_dialog_set_donated_to_fundraiser_filter",INVITE_DIALOG_SET_GROUP_FILTER:"invite_dialog_set_group_filter",INVITE_DIALOG_SET_FRIEND_FILTER:"invite_dialog_set_friend_filter",INVITE_DIALOG_SET_MUTUAL_FRIENDS_FILTER:"invite_dialog_set_mutual_friends_filter",INVITE_DIALOG_SET_POSTED_BIRTHDAY_WISH_FILTER:"invite_dialog_set_posted_birthday_wish_filter",INVITE_USER_DIALOG_OPEN:"invite_user_dialog_open",INVITE_USER_FRIEND_INVITER_SEND:"invite_user_friend_inviter_send",INVITE_USER_COMPLETE:"invite_user_complete",INVITE_EMAIL_DIALOG_OPEN:"invite_email_dialog_open",INVITE_EMAIL_COMPLETE:"invite_email_complete",VIEW_USER_ON_INVITE_FLOW:"view_user_on_invite_flow",BULK_INVITE_USER_DIALOG_OPEN:"bulk_invite_user_dialog_open",CHANGE_DONATION_AMOUNT:"change_donation_amount",CHOOSE_PAYMENT_METHOD:"choose_payment_method",CLICK_ADD_PAYMENT_METHOD:"click_add_payment_method",ADD_PAYMENT_METHOD:"add_payment_method",REDIRECT_TO_PAYPAL:"redirect_to_paypal",WRITE_DONATION_STORY:"write_donation_story",VIEW_FUNDRAISER_SUPPORTERS:"view_fundraiser_supporters",VIEW_MODEL_SELECTED_PAYMENT_SELECTOR:"view_model_selected_payment_selector",GEN_PRICE_CONFIG:"gen_price_config",DONATE_CLICK:"donate_click",DONATE_CANCEL:"donate_cancel",LEARN_MORE_CLICK:"learn_more_click",INVITE_CLICK:"invite_click",REACTION_INVITE_CLICK_DEPRECATED:"reaction_invite_click",INVITE_COMPLETE:"invite_complete",SHARE_CLICK:"share_click",SHARE_CLICK_CANCEL:"share_click_cancel",SHARE_COMPLETE:"share_complete",SHARE_DONATION_COMPLETE:"share_donation_complete",SHARE_FAIL:"share_fail",COPY_LINK_CLICK:"copy_link_click",JOIN_CLICK:"join_click",JOIN_COMPLETE:"join_complete",LEAVE_CLICK:"leave_click",LEAVE_CONFIRM:"leave_confirm",LEAVE_CANCEL:"leave_cancel",LEAVE_COMPLETE:"leave_complete",UNFOLLOW_CLICK:"unfollow_click",UNFOLLOW_COMPLETE:"unfollow_complete",FOLLOW_CLICK:"follow_click",FOLLOW_COMPLETE:"follow_complete",FUNDRAISER_RHC_TIP_X_OUT:"fundraiser_rhc_tip_x_out",FUNDRAISER_PROMPT_RENDER:"fundraiser_prompt_render",FUNDRAISER_FOR_STORY_TIP_DISMISS:"fundraiser_for_story_tip_dismiss",FUNDRAISER_FOR_STORY_TIP_ACTION_CLICK:"fundraiser_for_story_tip_action_click",FUNDRAISER_FOR_STORY_SET_GOAL_AMOUNT:"fundraiser_for_story_set_goal_amount",FUNDRAISER_FOR_STORY_VIEW_NONPROFIT_SUGGESTION:"fundraiser_for_story_view_nonprofit_suggestion",FUNDRAISER_FOR_STORY_VIEW_LEARN_MORE:"fundraiser_for_story_view_learn_more",FUNDRAISER_FOR_STORY_VIEW_MORE_INFO:"fundraiser_for_story_view_more_info",FUNDRAISER_FOR_STORY_REPLACE_PLACEHOLDER_ATTACHMENT:"fundraiser_for_story_replace_placeholder_attachment",UNSAVE_COMPLETE:"unsave_complete",SAVE_COMPLETE:"save_complete",VIEW_FUNDRAISER:"view_fundraiser",VIEW_FUNDRAISER_RHC:"view_fundraiser_rhc",VIEW_FUNDRAISER_UPDATES:"view_fundraiser_updates",VIEW_BOOKMARK_HUB:"view_bookmark_hub",VIEW_BOOKMARK_HUB_TAB:"view_bookmark_hub_tab",VIEW_BOOKMARK_FUNDRAISER_PAGINATION:"view_bookmark_fundraiser_pagination",VIEW_FUNDRAISER_HUB_CATEGORY:"view_fundraiser_hub_category",VIEW_GIVING_TUESDAY_FUNDRAISER_PAGINATION:"view_giving_tuesday_fundraiser_pagination",VIEW_PAGE_FUNDRAISERS_TAB:"view_page_fundraisers_tab",VIEW_FUNDRAISER_CREATION_LANDING_PAGE:"view_fundraiser_creation_landing_page",VIEW_FUNDRAISER_CREATION_REDIRECT:"view_fundraiser_creation_redirect",VIEW_FUNDRAISER_CREATION_PENDING_DIALOG:"view_fundraiser_creation_pending_dialog",VIEW_FUNDRAISER_CREATION_PENDING_EDIT_DIALOG:"view_fundraiser_creation_pending_edit_dialog",VIEW_CREATE_OUTRO_DIALOG:"view_create_outro_dialog",VIEW_ABOUT_FUNDRAISERS:"view_about_fundraisers",VIEW_FUNDRAISER_HUB_BIRTHDAY_TAB:"view_fundraiser_hub_birthday_tab",VIEW_FUNDRAISER_HUB_PERSONAL_TAB:"view_fundraiser_hub_personal_tab",INVITE_NULL_MISSION:"invite_null_mission",PERSONAL_UPDATE_NULL_MISSION:"personal_update_null_mission",SEE_SELF_DONATIONS:"see_self_donations",COMPOSE_CLICK:"compose_click",CREATE_POST:"create_post",CREATE_COMMENT:"create_comment",DELETE_POST:"delete_post",DELETE_COMMENT:"delete_comment",PAGE_VERIFICATION_INITIALIZED:"page_verification_initialized",PAGE_TERM_REVIEW_INITIALIZED:"page_term_review_initialized",PAYMENT_APPLICATION_INITIALIZED:"payment_application_initialized",ONBOARDING_PAGE_LOAD:"onboarding_page_load",CHARITY_SRT_FLOW:"charity_srt_flow",CHARITY_SRT_JOB_APPROVED:"charity_srt_job_approved",CHARITY_SRT_JOB_CREATION:"charity_srt_job_creation",CHARITY_SRT_JOB_DECISION:"charity_srt_job_decision",CHARITY_SRT_THREAD_CREATION:"charity_srt_thread_creation",CHARITY_SRT_UNDO_COMPLIANCE_REVIEW:"charity_srt_undo_compliance_review",CHARITY_VERIFICATION_DOCUMENT_UPLOAD:"charity_verification_document_upload",CHARITY_VERIFICATION_DOCUMENT_UPLOAD_COMPLETE:"charity_verification_document_upload_complete",CHARITY_CREATION:"charity_creation",CHARITY_CREATION_COMPLETE:"charity_creation_complete",CHARITY_TRANSACTION_REPORTS:"charity_transaction_reports",TERMS_ACCEPT_PAGE_LOAD:"terms_accept_page_load",TERMS_ACCEPT:"terms_accept",ORGANIZATION_DETAILS:"organization_details",LEADERSHIP_INFO:"leadership_info",PAYMENT_INFO:"payment_info",ENTITY_CREATION:"entity_creation",MISSING_GRAPHQL_FIELDS:"fundraiser_page_missing_fields",GOTO_PAGE_SUBTITLE:"fundraiser_charity_page_subtitle",GOTO_PAGE_ACTIONBAR:"fundraiser_page_tapped_go_to_page",PERSONAL_UPDATE_BEGIN:"personal_update_begin",PERSONAL_UPDATE_SEND_MESSAGE:"personal_update_send_message",PERSONAL_UPDATE_SEND_EMAIL:"personal_update_send_email",PERSONAL_UPDATE_SEND_COUNT:"personal_update_send_count",XMA_BAD_DONATE_LINK:"fundraiser_xma_bad_donate_link",XMA_FALLBACK_VIEW:"fundraiser_xma_fallback_view",XMA_TAP_ATTACHMENT:"fundraiser_xma_tap_attachment",XMA_TAP_DONATE:"fundraiser_xma_tap_donate",XMA_VIEW:"fundraiser_xma_view",XMA_VIEW_DONATE_BUTTON:"fundraiser_xma_view_donate_button",SINGLE_CLICK_INVITE_SENT:"fundraiser_single_click_invite_sent",SINGLE_CLICK_INVITE_SENT_FAILURE:"fundraiser_single_click_invite_sent_failure",SINGLE_CLICK_INVITE_FETCH_DATA_FAILURE:"fundraiser_single_click_invite_fetch_data_failure",SINGLE_CLICK_INVITE_VIEW:"fundraiser_single_click_invite_view",POST_DONATION_BUTTON_TAP:"fundraiser_thank_you_button_tap",POST_DONATION_VIEW:"fundraiser_view_thank_you",QUICK_PROMOTION_IMPRESSION:"quick_promotion_impression",QUICK_PROMOTION_PRIMARY_CLICK:"quick_promotion_primary_click",QUICK_PROMOTION_SECONDARY_CLICK:"quick_promotion_secondary_click",QUICK_PROMOTION_DISMISS_CLICK:"quick_promotion_dismiss_click",POST_STATUS_UPDATE:"post_status_update",SHOW_POST_UPSELL:"show_post_upsell",SUPPRESSED_POST_UPSELL:"suppressed_post_upsell",CLOSE_POST_UPSELL:"close_post_upsell",FUNDRAISER_FOR_STORY_CHARITY_CLICK:"fundraiser_for_story_charity_click",PERSONAL_CAUSE_ANALYSIS_RULE_MATCHED:"personal_cause_analysis_rule_matched",PERSONAL_CAUSE_KEYWORDS_MATCHED_ON_COMMENT:"personal_cause_keywords_matched_on_comment",FUNDRAISER_AUTONOTIFY_COMPLETE:"fundraiser_autonotify_complete",LIVE_VIDEO_ATTACHMENT_VIEW:"fundraiser_live_video_attachment_view",LIVE_VIDEO_START:"fundraiser_live_video_start",CANCEL:"cancel",CONFIRM:"confirm",HIDE:"hide",NOTIF_CAPPED_NOT_SENT:"notif_capped_not_sent",NOTIF_CLICK:"notif_click",NOTIF_GENERATE:"notif_generate",NOTIF_IMPRESSION:"notif_impression",NOTIF_MARKASREAD:"notif_markasread",NOTIF_MARKASSEEN:"notif_markasseen",NOTIF_NEGATIVE_FEEDBACK:"notif_negative_feedback",CHANGE_MASTER_NOTIF_SETTING:"change_master_notif_setting",EXTERNAL_APP_DONATION:"external_app_donation",EXTERNAL_APP_DONATION_DELETION:"external_app_donation_deletion",WHITELIST_FUNDRAISERS_API:"whitelist_fundraisers_api",FAQ_VIEW_ANSWER:"faq_view_answer",FAQ_SHARE_ARTICLE:"faq_share_article",IDLE_TO_DONATE_BANNER_SHOWN:"idle_to_donate_banner_shown",IDLE_TO_DONATE_BANNER_DISMISSED:"idle_to_donate_banner_dismissed",OUTRO_SHOWN:"fundraiser_outro_shown",OUTRO_DISMISSED:"fundraiser_outro_dismissed",DONATION_THANK_YOU_COMMENT_DIALOG_OPEN:"donation_thank_you_comment_dialog_open",DONATION_THANK_YOU_COMMENT_COMPLETE:"donation_thank_you_comment_complete",FUNDRAISER_ACTIVATION:"fundraiser_activation",FUNDRAISER_GOAL_HIT:"fundraiser_goal_hit",FUNDRAISER_LIVE_STARTING:"fundraiser_live_broadcast_starting",FUNDRAISER_LIVE_RECORDING:"fundraiser_live_broadcast_recording",FUNDRAISER_TAP_NONPROFIT_POST:"tap_nonprofit_post",FUNDRAISER_SHARE_NONPROFIT_POST:"share_nonprofit_post",INTERESTED_COMPLETE:"interested_complete",UNINTERESTED_COMPLETE:"uninterested_complete",FUNDRAISER_CHECKLIST_EXPAND_ITEM:"expand_creator_checklist_item",FUNDRAISER_CHECKLIST_TAP_CTA:"tap_creator_checklist_item_cta",QP_AUCTION_FUNDRAISER_IMPRESSION:"qp_auction_fundraiser_impression",QP_AUCTION_FUNDRAISER_CLICK:"qp_auction_fundraiser_click",FUNDRAISER_CREATE_OPT_OUT_PREFILL_TITLE:"fundraiser_create_opt_out_prefill_title",FUNDRAISER_CREATE_OPT_OUT_PREFILL_DESCRIPTION:"fundraiser_create_opt_out_prefill_description",FUNDRAISER_SEARCH_QUERY:"fundraiser_search_query",FUNDRAISER_SEARCH_RESULTS:"fundraiser_search_results",FUNDRAISER_SEARCH_RESPONSE_EMPTY:"fundraiser_search_response_empty",FUNDRAISER_SEARCH_LOAD_MORE:"fundraiser_search_load_more",FUNDRAISER_SEARCH_LOAD_MORE_RESPONSE_EMPTY:"fundraiser_search_load_more_response_empty",FUNDRAISER_HUB_CHARITY_SEARCH_QUERY:"fundraiser_hub_charity_search_query",FUNDRAISER_HUB_CHARITY_SEARCH_RESULTS:"fundraiser_hub_charity_search_results",FUNDRAISER_HUB_CHARITY_SEARCH_RESPONSE_EMPTY:"fundraiser_hub_charity_search_response_empty",FUNDRAISER_HUB_CHARITY_SEARCH_LOAD_MORE:"fundraiser_hub_charity_search_load_more",FUNDRAISER_HUB_CHARITY_SEARCH_LOAD_MORE_RESPONSE_EMPTY:"fundraiser_hub_charity_search_load_more_response_empty",CONFIRM_FUNDRAISER_MATCH_BEGIN:"confirm_fundraiser_match_begin",CONFIRM_FUNDRAISER_MATCH_CANNOT_AUTOCHARGE:"confirm_fundraiser_match_cannot_autocharge",CONFIRM_FUNDRAISER_MATCH_PAID:"confirm_fundraiser_match_paid",CONFIRM_FUNDRAISER_MATCH_COMPLETE:"confirm_fundraiser_match_complete",CONFIRM_FUNDRAISER_MATCH_VIEW_INTERSTITIAL:"confirm_fundraiser_match_view_interstitial",CONFIRM_FUNDRAISER_MATCH_ZERO_AMOUNT:"confirm_fundraiser_match_zero_amount",CREATE_FLOW_MATCH_TOGGLE_INPUT:"create_flow_match_toggle_input",CREATE_FLOW_MATCH_CHANGE_AMOUNT:"create_flow_match_change_amount",CREATE_FUNDRAISER_MATCH_BEGIN:"create_fundraiser_match_begin",CREATE_FUNDRAISER_MATCH_COMPLETE:"create_fundraiser_match_complete",CREATE_FUNDRAISER_MATCH_VIEW_INTERSTITIAL:"create_fundraiser_match_view_interstitial",CREATE_FUNDRAISER_MATCHING_RULE:"create_fundraiser_matching_rule",CREATE_FUNDRAISER_MATCHING_POOL_COMPLETE:"create_fundraiser_matching_pool_complete",CREATE_FUNDRAISER_SCHEDULED_MATCH_COMPLETE:"create_fundraiser_scheduled_match_complete",SCHEDULE_MATCH_JOB:"schedule_match_job",DONATION_MATCH_COMPLETE:"donation_match_complete",EDIT_FUNDRAISER_MATCH_BEGIN:"edit_fundraiser_match_begin",EDIT_FUNDRAISER_MATCH_COMPLETE:"edit_fundraiser_match_complete",FUNDRAISER_MATCH_DELETE_COMPLETE:"fundraiser_match_delete_complete",FUNDRAISER_MATCH_DELETE_BEGIN:"fundraiser_match_delete_begin",FUNDRAISER_MATCH_HARD_DELETE_CALLED:"fundraiser_match_hard_delete_called",FUNDRAISER_MATCH_REVIEW_VIEW_INTERSTITIAL:"fundraiser_match_review_view_interstitial",FUNDRAISER_SCHEDULED_MATCH_DELETE_BEGIN:"fundraiser_scheduled_match_delete_begin",FUNDRAISER_SCHEDULED_MATCH_DELETE_COMPLETE:"fundraiser_scheduled_match_delete_complete",MATCHING_AUTOCHARGE_PAYMENTS_SCRIPT:"matching_autocharge_payments_script",FUNDRAISER_MATCH_MET:"fundraiser_match_met",SCHEDULE_MATCH_RUNNING_JOB:"schedule_match_running_job",RECURRING_DONATION_CREATE:"recurring_donation_create",RECURRING_DONATION_ACTIVATE:"recurring_donation_activate",RECURRING_DONATION_CANCEL:"recurring_donation_cancel",RECURRING_DONATION_REINITED:"recurring_donation_reinited",FBMF_BIRTHDAY_GIFT_DONATION_CREATE:"fbmf_birthday_gift_donation_create",FBMF_BIRTHDAY_GIFT_DONATION_DELETE:"fbmf_birthday_gift_donation_delete",FUNDRAISER_PAGE_BIRTHDAY_REMIND_FAQ:"fundraiser_page_birthday_remind_faq",FUNDRAISER_PAGE_CREATE_BIRTHDAY_REMINDER:"fundraiser_page_create_birthday_reminder",TAPPED_STICKY_CREATE_BUTTON:"fundraiser_tapped_sticky_create_button",TAPPED_SHARE_AS_POST:"fundraiser_tapped_share_as_post",TAPPED_SHARE_AS_MESSAGE:"fundraiser_tapped_share_as_message",TAPPED_COPY_LINK:"fundraiser_tapped_copy_link",TAPPED_SHARE_SEE_MORE:"fundraiser_tapped_share_see_more",PAGE_DONATION_SETTINGS_LOAD_ERROR:"page_donation_settings_load_error",FUNDRAISER_ADD_ORGANIZERS:"fundraiser_add_organizers",FUNDRAISER_EDIT_ORGANIZERS:"fundraiser_edit_organizers",FUNDRAISER_BIRTHDAY_CENTER_PROMPT_VIEW:"fundraiser_birthday_center_prompt_view",CREATE_FUNDRAISER_PROFILE_FRAME_BEGIN:"create_fundraiser_profile_frame_begin",CREATE_FUNDRAISER_PROFILE_FRAME_COMPLETE:"create_fundraiser_profile_frame_complete",VIEW_FUNDRAISER_ORGANIZER_ACCEPT_REQUEST_OUTRO:"view_fundraiser_organizer_accept_request_outro",ACCEPT_FUNDRAISER_ORGANIZER_REQUEST:"accepted_fundraiser_organizer_request",ADD_PENDING_ORGANIZER_COMPLETE:"add_pending_organizer_complete",REMOVE_PENDING_ORGANIZER_COMPLETE:"remove_pending_organizer_complete",REMOVE_ORGANIZER_COMPLETE:"remove_organizer_complete",ACCEPT_ORGANIZER_REQUEST_COMPLETE:"accept_organizer_request_complete",DECLINE_ORGANIZER_REQUEST_COMPLETE:"decline_organizer_request_complete",BIRTHDAY_FUNDRAISER_LEARN_MORE_VIEW:"birthday_fundraiser_learn_more_view",BIRTHDAY_FUNDRAISER_PROFILE_PROMPT_IMPRESSION:"birthday_fundraiser_profile_prompt_impression",BIRTHDAY_FUNDRAISER_PROFILE_PROMPT_CLICK:"birthday_fundraiser_profile_prompt_click",BIRTHDAY_FUNDRAISER_PROFILE_PROMPT_DISMISS:"birthday_fundraiser_profile_prompt_dismiss",BIRTHDAY_FUNDRAISER_PROFILE_PROMPT_SOFT_DISMISS:"birthday_fundraiser_profile_prompt_soft_dismiss",PROFILE_PROMPT_IMPRESSION:"profile_prompt_impression",PROFILE_PROMPT_CLICK:"profile_prompt_click",PROFILE_PROMPT_DISMISS:"profile_prompt_dismiss",PROFILE_PROMPT_SOFT_DISMISS:"profile_prompt_soft_dismiss",GUIDESTAR_FUNDRAISER_HEADER_DISMISSED:"guidestar_fundraiser_header_dismissed",GUIDESTAR_SCRIPT_ERROR:"guidestar_script_error",PPGF_SCRIPT_ERROR:"ppgf_script_error",SOCIAL_CONTEXT_UNIT_SEE_ALL:"social_context_unit_tapped_see_all",SUPPORTERS_SCREEN_LOADED:"supporters_screen_loaded",SUPPORTERS_SCREEN_TAPPED_PROFILE:"supporters_screen_tapped_profile",FUNDRAISER_DONATION_ASYNC_UPDATE:"fundraiser_donation_async_update",FUNDRAISER_DONATION_ASYNC_UPDATE_SUCCESS:"fundraiser_donation_async_update_success",FUNDRAISER_FOR_STORY_DONATION_ASYNC_UPDATE:"fundraiser_for_story_donation_async_update",FUNDRAISER_FOR_STORY_DONATION_ASYNC_UPDATE_SUCCESS:"fundraiser_for_story_donation_async_update_success",FUNDRAISER_CRISIS_FOR_CHARITY_DONATION_ASYNC_UPDATE:"fundraiser_crisis_for_charity_donation_async_update",FUNDRAISER_CRISIS_FOR_CHARITY_DONATION_ASYNC_UPDATE_SUCCESS:"fundraiser_crisis_for_charity_donation_async_update_success",VIEW_FRIEND_SELECTOR_DONATION_IN_HONOR_OF:"view_friend_selector_donation_in_honor_of",VIEW_BIRTHDAY_PRESENT_UPSELL:"view_birthday_present_upsell",LOAD_NONPROFIT_SELECTOR_DONATION_IN_HONOR_OF:"load_nonprofit_selector_donation_in_honor_of",SELECT_NONPROFIT_DONATION_IN_HONOR_OF:"select_nonprofit_donation_in_honor_of",FAILED_TO_FETCH_DONATE_URL_DONATION_IN_HONOR_OF:"failed_to_fetch_donate_url_donation_in_honor_of",CREATE_DONATION_IN_HONOR_OF:"create_donation_in_honor_of",VIEW_DONATIONS_IN_HONOR_OF_ME_SCREEN:"view_donations_in_honor_of_me_screen",DONATE_SOCIAL_PLUGIN_IMPRESSION:"donate_social_plugin_impression",DONATE_SOCIAL_PLUGIN_LOGGED_IN_CLICK:"donate_social_plugin_logged_in_click",DONATE_SOCIAL_PLUGIN_LOGGED_OUT_CLICK:"donate_social_plugin_logged_out_click",PROFILE_PROMPT_FAILED_TO_RETRIEVE_TOP_FUNDRAISER_AFTER_PASSING_ELIGIBILITY_CHECK:"profile_prompt_failed_to_retrieve_top_fundraiser_after_passing_eligibility_check",CORPORATE_SEEDING_GIFT_CREATE_ELIGIBLE:"corporate_seeding_gift_create_eligible",CORPORATE_SEEDING_GIFT_CREATE_START:"corporate_seeding_gift_create_start",CORPORATE_SEEDING_GIFT_CREATE_SUCCESS:"corporate_seeding_gift_create_success",CORPORATE_SEEDING_GIFT_INTERSTITIAL_ACCEPT:"corporate_seeding_gift_interstitial_accept",CORPORATE_SEEDING_GIFT_INTERSTITIAL_CANCEL:"corporate_seeding_gift_interstitial_cancel",CORPORATE_SEEDING_GIFT_INTERSTITIAL_LEARN_MORE:"corporate_seeding_gift_interstitial_learn_more",CORPORATE_SEEDING_GIFT_INTERSTITIAL_VIEW:"corporate_seeding_gift_interstitial_view",OPEN_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL:"open_nonprofit_fundraiser_creation_short_url",COPY_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL:"copy_nonprofit_fundraiser_creation_short_url",VIEW_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL_BANNER:"view_nonprofit_fundraiser_creation_short_url_banner",CALL_TO_ACTION_RENDER:"call_to_action_render",GIVING_TUESDAY_MATCHING_TALLY:"giving_tuesday_matching_tally",GIVING_TUESDAY_BIRTHDAY_CENTER_PROMPT_VIEW:"giving_tuesday_birthday_center_prompt_view",VIEW_PAYOUT_OVERVIEW:"view_payout_overview",VIEW_PAYOUT_DETAILS:"view_payout_details"})}),null);
__d("SocialGoodCharityActionsLoggerParentEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DONATE:"donate",INTERACT:"interact",CREATE:"create",EDIT:"edit",DELETE:"delete",ONBOARDING:"onboarding",PAGES:"pages",INVITE:"invite",TRIGGER:"trigger",NFX:"nfx",NOTIFICATION:"notification",SRT_REVIEW:"srt_review",MILESTONE:"milestone",MATCHING:"matching",RECURRING_DONATION:"recurring_donation",FACEBOOK_MATCHING_FUND:"facebook_matching_fund",GUIDESTAR:"guidestar",PPGF:"ppgf",OFF_NETWORK:"off_network",CORPORATE_SEEDING_GIFT:"corporate_seeding_gift",GIVING_TUESDAY:"giving_tuesday"})}),null);
__d("SocialGoodCharityActionsSourceKeys",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LIVE_VIDEO_BROADCAST_STATUS:"broadcast_status",SOCIAL_UPSELL_REASON:"social_upsell_reason",SOURCE_NAME:"source_name",SOURCE_CATEGORY:"source_category",SOURCE_ID:"source_id",SESSION_ID:"session_id",POST_ID:"post_id",CHARITY_ID:"charity_id",CHARITY_ID_SELECTED:"charity_id_selected",BENEFICIARY_ID_SELECTED:"beneficiary_id_selected",BENEFICIARY_TYPE:"beneficiary_type",PROMOTIONAL_SOURCE:"promotional_source",REFERRAL_SOURCE:"referral_source",NOTIF_TYPE:"notif_type",OFFSITE_APP_ID:"offsite_app_id",QUICK_PROMOTION_ID:"quick_promotion_id",QUICK_PROMOTION_NAME:"quick_promotion_name",QP_CONVERSION_TOKEN:"qp_conversion_token",QP_HSCROLL_ITEMS:"quick_promotion_hscroll_items",QP_SESSION_ID:"quick_promotion_session_id",QP_DISPLAY_POSITION:"quick_promotion_display_position",QP_TYPE:"qp_type",PROFILE_PROMPT_TYPE:"profile_prompt_type",NUM_BDAY_CREATOR_FRIENDS:"num_bday_creator_friends",NUM_FUNDRAISER_WITH_PRESENCE_DONOR_FRIENDS:"num_fundraiser_with_presence_donor_friends",IS_ELIGIBLE_FOR_SOCIAL_CONTEXT_EXPERIMENT:"is_eligible_for_social_context_experiment",SOCIAL_CONTEXT_EXPERIMENT_GROUP:"social_context_experiment_group",DONATE_REF:"donate_ref",PAGE_ALIAS:"page_alias",EXTERNAL_EVENT_START_TIME:"external_event_start_time",EXTERNAL_EVENT_URI:"external_event_uri",EXTERNAL_FUNDRAISER_URI:"external_fundraiser_uri",HAS_BIRTHDAY_SEEDING_GIFT:"has_birthday_seeding_gift",BULK_INVITE_FRIEND_SET:"bulk_invite_friend_set",SEM_CAMPAIGN_ID:"sem_campaign_id",SEM_ADGROUPID:"sem_adgroupid",SEM_KEYWORD:"sem_keyword",SEM_SITELINK:"sem_sitelink",CORPORATE_GIFT_ID:"corporate_gift_id"})}),null);
__d("SocialGoodCharityActionsLoggerUtils",["Event","FundraiserCampaignType","SocialGoodCharityActionsLoggerEvents","SocialGoodCharityActionsLoggerParentEvents","SocialGoodCharityActionsSourceKeys","SocialGoodCharityActionsTypedLogger"],(function(a,b,c,d,e,f){__p&&__p();var g={logAction:function(event,a,c,d){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(event).setParentEventType(a).setCampaignID(c.campaign_id).setCampaignType(c.campaign_type).setAttributes(c.attributes).setSourceAttributes(c.source_attributes).setFundraiserID(c.fundraiser_id).log()},logOnboarding:function(event,a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(event).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").ONBOARDING).setAttributes(a).log()},logDonate:function(event,a){a===void 0&&(a=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(event).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").DONATE).setAttributes(a).log()},logU2CFundraiserInvite:function(event,a,c){c===void 0&&(c=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(event).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").INVITE).setSourceAttributes(a).setAttributes(c).log()},logU2CFundraiserCreation:function(event,a,c,d){c===void 0&&(c=null),d===void 0&&(d=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(event).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").CREATE).setSourceAttributes(a).setAttributes(c).setCampaignType(b("FundraiserCampaignType").USER_TO_CHARITY).setAbTestNamesToGroups(d).log()},logU2CFundraiserEdit:function(event,a,c,d){c===void 0&&(c=null),d===void 0&&(d=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(event).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").EDIT).setSourceAttributes(a).setAttributes(c).setCampaignID(a[b("SocialGoodCharityActionsSourceKeys").SOURCE_ID]).setCampaignType(b("FundraiserCampaignType").USER_TO_CHARITY).setAbTestNamesToGroups(d).log()},logJoinActionClick:function(a,c){var event=a?b("SocialGoodCharityActionsLoggerEvents").JOIN_CLICK:b("SocialGoodCharityActionsLoggerEvents").LEAVE_CLICK;this.logAction(event,b("SocialGoodCharityActionsLoggerParentEvents").INTERACT,c)},logFollowActionClick:function(a,c){var event=a?b("SocialGoodCharityActionsLoggerEvents").FOLLOW_CLICK:b("SocialGoodCharityActionsLoggerEvents").UNFOLLOW_CLICK;this.logAction(event,b("SocialGoodCharityActionsLoggerParentEvents").INTERACT,c)},logShareActionClick:function(a){this.logAction(b("SocialGoodCharityActionsLoggerEvents").SHARE_CLICK,b("SocialGoodCharityActionsLoggerParentEvents").INTERACT,a)},logCopyLinkActionClick:function(a){this.logAction(b("SocialGoodCharityActionsLoggerEvents").COPY_LINK_CLICK,b("SocialGoodCharityActionsLoggerParentEvents").INTERACT,a)},logXMAView:function(a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(b("SocialGoodCharityActionsLoggerEvents").XMA_VIEW).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").INTERACT).setFundraiserID(a).setCampaignID(a).setCampaignType(b("FundraiserCampaignType").USER_TO_CHARITY).log()},logXMATapDonate:function(a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(b("SocialGoodCharityActionsLoggerEvents").XMA_TAP_DONATE).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").INTERACT).setFundraiserID(a).setCampaignID(a).setCampaignType(b("FundraiserCampaignType").USER_TO_CHARITY).log()},logComposerPreviewAttachmentClose:function(){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(b("SocialGoodCharityActionsLoggerEvents").LIGHTWEIGHT_MINUTIAE_PREVIEW_ATTACHMENT_CLOSE).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").TRIGGER).setCampaignType(b("FundraiserCampaignType").LIGHTWEIGHT_FUNDRAISER_FOR_STORY).log()},logFundraiserForStoryCreation:function(event,a){new(b("SocialGoodCharityActionsTypedLogger"))().setCampaignType(b("FundraiserCampaignType").LIGHTWEIGHT_FUNDRAISER_FOR_STORY).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").CREATE).setEvent(event).setSourceAttributes(a).log()},logPostCreationFlowChangeCharity:function(a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(b("SocialGoodCharityActionsLoggerEvents").CHANGE_CHARITY).setParentEventType(b("SocialGoodCharityActionsLoggerParentEvents").CREATE).setCampaignType(b("FundraiserCampaignType").LIGHTWEIGHT_FUNDRAISER_FOR_STORY).setAttributes(a).log()},logDonateSocialPluginLoggedInClick:function(a){this.logAction(b("SocialGoodCharityActionsLoggerEvents").DONATE_SOCIAL_PLUGIN_LOGGED_IN_CLICK,b("SocialGoodCharityActionsLoggerParentEvents").DONATE,a)},logDonateSocialPluginLoggedOutClick:function(a){this.logAction(b("SocialGoodCharityActionsLoggerEvents").DONATE_SOCIAL_PLUGIN_LOGGED_OUT_CLICK,b("SocialGoodCharityActionsLoggerParentEvents").DONATE,a)},logCopyNonprofitCreationShortURLClick:function(a){this.logAction(b("SocialGoodCharityActionsLoggerEvents").COPY_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL,b("SocialGoodCharityActionsLoggerParentEvents").INTERACT,a)},logCopyNonprofitCreationShortURLOnClick:function(a,c){b("Event").listen(a,"click",function(a){g.logCopyNonprofitCreationShortURLClick(c)})}};e.exports=g}),null);