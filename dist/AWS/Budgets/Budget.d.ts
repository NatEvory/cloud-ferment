import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Budget extends AWSResource<Budget_ResourceProperties> {
    constructor(name: string, properties: Budget_ResourceProperties, dependsOn?: string[]);
}
export interface Budget_ResourceProperties extends AWSResourceProperties {
    NotificationsWithSubscribers?: Budget_NotificationWithSubscribers[];
    Budget: Budget_BudgetData;
}
export interface Budget_NotificationWithSubscribers {
    Subscribers: Budget_Subscriber[];
    Notification: Budget_Notification;
}
export interface Budget_Subscriber {
    SubscriptionType: AWSStringProperty;
    Address: AWSStringProperty;
}
export interface Budget_Notification {
    ComparisonOperator: AWSStringProperty;
    NotificationType: AWSStringProperty;
    Threshold: number;
    ThresholdType?: AWSStringProperty;
}
export interface Budget_BudgetData {
    BudgetLimit?: Budget_Spend;
    TimePeriod?: Budget_TimePeriod;
    TimeUnit: AWSStringProperty;
    CostFilters?: any;
    BudgetName?: AWSStringProperty;
    CostTypes?: Budget_CostTypes;
    BudgetType: AWSStringProperty;
}
export interface Budget_CostTypes {
    IncludeSupport?: boolean;
    IncludeOtherSubscription?: boolean;
    IncludeTax?: boolean;
    IncludeSubscription?: boolean;
    UseBlended?: boolean;
    IncludeUpfront?: boolean;
    IncludeDiscount?: boolean;
    IncludeCredit?: boolean;
    IncludeRecurring?: boolean;
    UseAmortized?: boolean;
    IncludeRefund?: boolean;
}
export interface Budget_TimePeriod {
    Start?: AWSStringProperty;
    End?: AWSStringProperty;
}
export interface Budget_Spend {
    Amount: number;
    Unit: AWSStringProperty;
}
