// Notification Types
type NotificationCategory =
	| 'account_updates'
	| 'marketing'
	| 'financial_insights';
type NotificationTypes = 'email' | 'push';

interface INotification {
	id: number;
	message_title: string;
	message?: string;
	created_at: string | Date;
	category: {
		display_name: string;
		category: NotificationCategory;
	};
}

interface INotificationSettings {
	id: number;
	category_id: string;
	display_name: string;
	value: boolean;
	type: NotificationTypes;
	category: {
		display_name: string;
	};
}

// Finance Types
interface IFinance {
	finance: string;
	value: number;
	isPositive: boolean;
}

// Goal Types
interface GoalTask {
	id: number;
	name: string;
	description: string;
	completionDate: string | null;
}

interface IGoal {
	id: number;
	name: string;
	desiredGoalAmount: number | null;
	currentGoalAmount: number | null;
	estimatedCompletionDate: string;
	goalSettings: {
		id: number;
		name: string;
		monthlyPayments: number | null;
		data: { [key: string]: any };
	}[];
	goalTasks: GoalTask[];
	percentage: number;
	type: 'get-out-of-debt' | 'grow-my-savings' | 'pay-for-something';
}

// Insight Types
type InsightType =
	| 'volatilityIncome'
	| 'insufficientFunds'
	| 'challenge'
	| 'challengeComplete'
	| 'budget'
	| 'subscription'
	| 'goal'
	| 'profileQuestion'
	| 'educational'
	| 'rule'
	| 'payday'
	| 'rateShopping'
	| 'affordability'
	| 'savings';
type InsightDetailType = 'savingsBreakdown';
type IInsightDescription =
	| string
	| {
			text: string;
			tag?: 'strong';
			context?: 'positive' | 'negative';
	  }[];

type IInsightTip = IInsightDescription;

interface IInsightSharedProps {
	insightId?: number;
}

export interface IInsight {
	id: number;
	title: string;
	subtitle: string;
	description: string | null;
	data: {
		chart_type?: 'donut' | 'bar' | 'line';
		image_url?: string;
		ctas?: {
			label: string;
			redirect_url?: string;
			chatbot_prompt?: string;
			chatbot_workflow_id?: string;
		}[];
		[key: string]: any;
	};
	expiration_date: string | null;
	saved: boolean;
}

export interface InsightDonutChartProps {
	percentage?: number;
	data: { label: string; value: number; color: string; showLabel?: boolean }[];
}

export interface InsightBarChartProps {
	domain?: {
		x?: [number, number];
		y?: [number, number];
	};
	xAxisLabel?: string;
	yAxisLabel?: string;
	data: {
		x: number;
		y: number;
		color: string;
		xName?: string;
		gradient?: {
			startColor: string;
			endColor: string;
		};
	}[];
	referenceLine?: {
		label?: string;
		value: number;
	};
	tickFormatType?: 'percentage' | 'currency';
}

export interface InsightLineChartProps {
	domain?: {
		x?: [number, number];
		y?: [number, number];
	};
	xAxisLabel?: string;
	yAxisLabel?: string;
	data: {
		x: number;
		y: number;
		xName?: string;
	}[];
	referenceLine?: {
		label?: string;
		value: number;
	};
}

type SavedInsight = Pick<
	IInsight,
	'id' | 'description' | 'expiration_date' | 'subtitle'
>;

interface InsightComponentProps {
	insight: IInsight;
}

interface IInsightDetail {
	id: number;
	insightId: number;
	type: InsightDetailType;
	title: string;
	data: {
		savingsBreakdown?: ISavingsBreakdown[];
	};
}

// Insight Specific UIs Types

interface IRateShopping extends IInsightSharedProps {
	title?: string;
	description?: IInsightDescription;
	type?: 'opt-in' | 'offer';
	dataTitle?: string;
	data?: IRateShoppingData[];
}

interface IAffordability extends IInsightSharedProps {
	title?: string;
	description?: IInsightDescription;
	data?: IBarChart;
}

interface ISavingsInsight extends IInsightSharedProps {
	title?: string;
	description?: IInsightDescription;
	data?: IBarChart;
}

interface IIncome extends IInsightSharedProps {
	title?: string;
	description?: IInsightDescription;
	data?: IBarChart;
}

interface IChallenge extends IInsightSharedProps {
	challengeName?: string;
	title?: string;
	description?: IInsightDescription;
	data?: IBarChart & { controlValue: number; activeBar?: number | boolean };
}

interface IBudget extends IInsightSharedProps {
	overBudget?: boolean;
	title?: string;
	description?: IInsightDescription;
	data?: BudgetChartData | BudgetListData;
	tip?: IInsightTip;
}

interface ISubscription extends IInsightSharedProps {
	title?: string;
	description?: IInsightDescription;
	data?: IBarChart;
	tip?: IInsightTip;
}

interface IProfileQuestion {
	image_url?: string;
}

interface IEducational {
	image_url?: string;
	article_url?: string;
}

interface IRule extends IInsightSharedProps {
	title?: string;
	description?: IInsightDescription;
	svg?: any;
}

interface IGoalInsight extends IInsightSharedProps {
	goalName?: string;
	title?: string;
	description?: IInsightDescription;
	data?: GoalInsightChartData | GoalInsightListData;
	tip?: IInsightTip;
}

interface IPayDayInsight extends IInsightSharedProps {
	title?: string;
	paydayDate?: string;
	description?:
		| string
		| {
				text: string;
				tag?: 'strong';
				context?: 'positive' | 'negative';
		  }[];
	data?: PayDayNewIncomeData | PayDayData | PayDayRaiseData;
}

// Insight Data Types

interface BudgetData {
	type: 'chart' | 'list';
}

type BudgetChartData = BudgetData & {
	type: 'chart';
} & IBarChart & { controlValue: number; activeBar?: number | boolean };

type BudgetListData = BudgetData & { type: 'list' } & {
	title: string;
	data: {
		img: string;
		service: string;
		date: string;
		value: number;
	}[];
};

interface GoalInsightData {
	type: 'chart' | 'list';
}

type GoalInsightChartData = GoalInsightData & {
	type: 'chart';
} & IAreaChart & { controlValue: number };

type GoalInsightListData = GoalInsightData & { type: 'list' } & {
	title: string;
	data: {
		img: string;
		service: string;
		href: string;
	}[];
};

interface IRateShoppingData {
	logo?: any;
	totalAmount?: number;
	monthlyPaymentValue?: number;
	fixedAPRValue?: number;
	title?: string;
	loanTerm?: string;
}

interface PayDayDataType {
	type: 'newIncome' | 'carousel' | 'raise';
}

type PayDayNewIncomeData = PayDayDataType & {
	type: 'newIncome';
};

type PayDayRaiseData = PayDayDataType & {
	type: 'raise';
};

type PayDayData = PayDayDataType & {
	type: 'carousel';
};

// Insight Details Types

interface ISavingsBreakdown {
	title: string;
	data: SavingsBreakdownData[];
}

// Insight Details Data Types

interface SavingsBreakdownData {
	insightId: number;
	title: string;
	dateApplied: string;
	savedAmount: number;
	list: {
		color: string;
		value: number;
		complement?: string;
	}[];
}

// Chart Types
interface IAreaChart {
	id: number | string;
	data: {
		x: string;
		y: number;
	}[][];
	labelsType?: 'date';
	title?: string;
}

interface IBarChart {
	id: number | string;
	data: {
		x: string;
		y: number;
		fill?: string;
		color?: string;
	}[];
	labelsType?: 'percentage' | 'currency';
	title?: string;
}

interface AreaChartWithScatterData {
	x: string;
	y: number;
}

// User and auth Types

export type Address = {
	address_line?: string | null;
	city?: string | null;
	state?: string | null;
	country?: string | null;
	zip?: string | null;
};

export type SMUser = {
	id: number;
	name: string; // replacement for display_name
	display_name?: string; // try not to use unless absolutely necessary; prefer 'name' instead
	first_name: string;
	last_name: string;
	email: string;
	phone?: string | null;
	image: string | null; // replacement for photo_url
	photo_url?: string; // try not to use unless absolutely necessary; prefer 'image' instead
	date_of_birth?: Date | null;
	address?: Address | null;
	roles: (string | null)[];
	ngRoles?: (string | null)[];
	permissions?: (string | null | undefined)[];
	accessToken: string;
	expiresAt?: number;
	refreshToken: string;
	legacyToken?: string;
	passwordCreated: boolean;
	provider?: string;
	provider_id?: string | null;
	spammer?: boolean;
	isUserAnAgent?: boolean;
	created: Date | null;
};

export type LoginParams = {
	email: string;
	password: string;
	sessionId?: string;
	userAgent?: string;
};

export type RegisterParams = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	bvEmail: string;
	bvConfirmed: boolean;
};

export type ForgotParams = {
	email: string;
};

// Chat bot Types

export type ChatBotMessage = {
	sender_id: 'user' | 'server';
	message: string | string[];
	image?: string;
	timestamp: string;
	widgets?: MessageWidget[];
};

export type MessageWidget = {
	name: string;
	payload?: any;
};

export type WidgetsConfig = {
	widgets?: ChatWidget[];
};

export type ChatWidget = {
	widgetName: string;
	widget: (props: any & ChatBotWidgetBaseProp) => ReactElement;
};

export type ChatBotWidgetBaseProp = {
	sendMessage: (value: any, addToHistory?: boolean) => void;
};

// fetch types

export interface MyRequestInit extends Omit<RequestInit, 'headers'> {
	headers?: Record<string, string>;
}

export type FetchServiceOptions = {
	noCache?: boolean;
	isActiveSession?: boolean;
	addSMHeaders?: boolean;
	JSONContent?: boolean;
	throwError?: boolean;
};

export type GetUserSession = {
	accessToken: string;
	isAdmin: boolean;
};

// Moneykit Types

type MKAccount = {
	account_id: string;
	original_id?: string;
	account_type: string;
	name: string;
	account_mask?: string;
	balances: {
		currency: string;
		available: number;
		current: number;
		limit: number | null;
		balance_date: string | null;
	};
	closed: boolean | null;
};

type MKLinkedAccounts = {
	[key: string]: { accounts: MKAccount[]; last_synced_at: string | null };
};

type AccountTypes = 'bank' | 'investment' | 'loan' | 'insurance' | 'other';

type MappedAccount = MKAccount & {
	link_id: string;
	last_synced_at: string | null;
	institution_id: string;
	institution_name: string;
	institution_avatar: string;
};

type MappedAccounts = {
	[key: string]: MappedAccount[];
};
